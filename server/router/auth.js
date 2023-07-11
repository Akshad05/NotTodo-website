const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Hello world from server router.js");
});

// //Using Promises
// router.post("/Login", (req, res) => {
//   const { username, email, password, confirmPassword } = req.body;

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "Email already Exist" });
//       }

//       const user = new User({ username, email, password, confirmPassword });

//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "User registered Successfully" });
//         })
//         .catch((err) => res.status(500).json({ error: "Failed to register" }));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

//Using Async Await //Modern approach
router.post("/SignUp", async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already Exist" });
    } else if (password != confirmPassword) {
      return res.status(422).json({ error: "Password are not matching" });
    } else {
      const user = new User({ username, email, password, confirmPassword });

      await user.save();
      res.status(201).json({ message: "User registered Successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

//Login route

router.post("/Login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please fill the data" });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      const token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credientials" });
      } else {
        res.json({ message: "User Logged In Successfully" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credientials" });
    }
  } catch (err) {
    console.log(err);
  }
});

//about us
router.get("/about", authenticate, (req, res) => {
  console.log("Hello my about");
  res.send(req.rootUser);
});

//Logout
router.get("/Logout", (req, res) => {
  console.log("User logout");
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("User Logout");
});

module.exports = router;
