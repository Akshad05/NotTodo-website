const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const userAuthenticate = require("../middleware/authenticate");

require("../db/conn");
const User = require("../model/userSchema");

const List = require("../model/notTodoSchema");

const bodyParser = require("body-parser");
const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAPIKEY,
});

router.use(bodyParser.json());

//Add a new document to collection
router.post("/add", async (req, res) => {
  try {
    const { title, description, dueDate, priority } = req.body;
    // res.json({ num: priority });
    if (!title || !description || !dueDate || !priority) {
      return res.status(400).json({ error: "Please fill the data" });
    } else {
      const list = new List({
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
      });
      await list.save();

      return res.status(200).json({ error: "Sucessfully added" });
    }
  } catch (err) {
    console.log(err);
  }
});

//Read all documents from coillection
router.get("/read", userAuthenticate, async (req, res) => {
  try {
    const rootUser = req.rootUser;

    const list = await List.find().sort({ [rootUser.sortBy]: 1 });
    res.status(200).json({ list: list });
  } catch (err) {
    console.log(err);
  }
});

//To send data based on cookies recieved
router.get("/userData", userAuthenticate, (req, res) => {
  res.send(req.rootUser);
});

//Updating a document from collection
router.put("/update/:id", async (req, res) => {
  try {
    const { title, description, dueDate, priority } = req.body;
    if (!title || !description || !dueDate || !priority) {
      return res.status(400).json({ error: "Please fill the data" });
    }
    const updatedDocument = await List.findByIdAndUpdate(
      req.params.id,
      { title, description, dueDate, priority },
      { new: true } // This option returns the updated document
    );
    // res.json({ id: req.params.id });
    if (updatedDocument) {
      return res
        .status(200)
        .json({ message: "Successfully updated", data: updatedDocument });
    } else {
      return res.status(404).json({ error: "Document not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
});

//Chatgpt prompt
router.post("/chatgpt", async (req, res) => {
  try {
    const { prompt } = req.body;

    const completion = await openai.completions.create({
      model: "text-davinci-003",

      prompt: prompt,
      max_tokens: 150,
    });
    const result = completion.choices[0].text;
    console.log(result);
    res.status(200).json({ result: result });
  } catch (error) {
    console.error(error);
    res.status(400).send("Error occurred");
  }
});

//Updating sortBy
router.post("/updateSort", userAuthenticate, async (req, res) => {
  try {
    const { sort } = req.body;

    if (!sort) {
      return res.status(400).json({ error: "Please choose sort method" });
    }
    const rootUser = req.rootUser;

    const updatedDocument = await User.findOneAndUpdate(
      { email: rootUser.email }, // Find the document by email
      { $set: { sortBy: sort } }, // Update the 'sort' field
      { new: true } // Options to return the updated document
    );

    if (updatedDocument) {
      return res.status(200).json({
        message: "Successfully updated sortBy",
        data: updatedDocument,
      });
    } else {
      return res.status(404).json({ error: "Document not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//Adding acknowledgment
router.post("/acknowledge", async (req, res) => {
  try {
    const { listId, userEmail, username } = req.body;

    if (!listId || !userEmail || !username) {
      return res.status(400).json({ error: "Data not recieved to server" });
    } else {
      const listExist = await List.findOne({ _id: listId });
      const ackExist = listExist.acknowledgment.find(
        (ack) => ack.userEmail === userEmail
      );
      if (listExist) {
        if (ackExist) {
          return res.status(405).json({ message: "Already Acknowledged" });
        } else {
          listExist.acknowledgment = listExist.acknowledgment.concat({
            userEmail: userEmail,
            username: username,
          });
          await listExist.save();
          res.status(200).json({ message: "Acknowledged sucessfully" });
        }
      }
    }
  } catch (err) {
    res.status(400);
  }
});

//Deleting a document from collection
router.delete("/delete/:id", async (req, res) => {
  await List.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: "Deleted" });
    })
    .catch((error) => {
      res.status(400);
    });
});

//User Singnup
router.post("/SignUp", async (req, res) => {
  const { username, email, password, confirmPassword, UserType } = req.body;

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already Exist" });
    } else if (password != confirmPassword) {
      return res.status(422).json({ error: "Password are not matching" });
    } else {
      const user = new User({
        username,
        email,
        password,
        confirmPassword,
        type: UserType,
      });

      await user.save();
      res.status(201).json({ message: "User registered Successfully" });
    }
  } catch (err) {
    res.status(400);
  }
});

//User Login

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

//About us
router.get("/about", userAuthenticate, (req, res) => {
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
