import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas/signUp";
import { Link, useHistory } from "react-router-dom";
// import Login from "./Login";
import "./style.css";
import "./login.svg";

let userType;
const SignUp = () => {
  const [secretKey, setSecretKey] = useState("");
  const history = useHistory();

  const initialValues = {
    username2: "",
    email: "",
    password2: "",
    confirmPassword2: "",
    UserType: "",
  };

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,

      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  const PostData = async (e) => {
    if (userType == "Admin" && secretKey != "Akshad") {
      e.preventDefault();
      window.alert("Invalid Admin");
    } else {
      e.preventDefault();

      const { username2, email, password2, confirmPassword2, UserType } =
        values;
      const res = await fetch("/SignUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username2,
          email: email,
          password: password2,
          confirmPassword: confirmPassword2,
          UserType: UserType,
        }),
      });
      const data = await res.json();

      if (res.status === 422 || !data) {
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      } else {
        window.alert("Registration Successsful");
        console.log("Registration Successsful");

        history.push("/Login");
      }
    }
  };
  useEffect(() => {
    console.log(userType);
  }, []);

  return (
    <>
      <div className="body" id="reEffect">
        <div className="loginContainer">
          <div className="signin-signup">
            <form className="sign-in-form" onSubmit={handleSubmit}>
              <h2 className="title">Sign up</h2>
              <div className="radio">
                <div className="radioComp">
                  <input
                    type="radio"
                    name="UserType"
                    value="User"
                    onChange={(e) => {
                      userType = e.target.value;
                      handleChange(e);
                    }}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  User
                </div>
                <div className="radioComp">
                  <input
                    type="radio"
                    name="UserType"
                    value="Admin"
                    onChange={(e) => {
                      userType = e.target.value;
                      handleChange(e);
                    }}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  Admin
                </div>
              </div>
              <div className="input-field">
                <i className="fas fa-user"></i>

                <input
                  type="text"
                  placeholder="Username"
                  name="username2"
                  id="username2"
                  autoComplete="off"
                  value={values.username2}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.username2 && touched.username2 ? (
                  <small className="form-error">{errors.username2}</small>
                ) : null}
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <small className="form-error">{errors.email}</small>
                ) : null}
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  name="password2"
                  id="password2"
                  autoComplete="off"
                  value={values.password2}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password2 && touched.password2 ? (
                  <small className="form-error">{errors.password2}</small>
                ) : null}
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword2"
                  id="confirmPassword2"
                  autoComplete="off"
                  value={values.confirmPassword2}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confirmPassword2 && touched.confirmPassword2 ? (
                  <small className="form-error">
                    {errors.confirmPassword2}
                  </small>
                ) : null}
              </div>

              {userType === "Admin" ? (
                <div className="input-field">
                  <i class="fa-solid fa-key"></i>

                  <input
                    type="password"
                    placeholder="Secret key"
                    name="secretKey"
                    id="secretKey"
                    autoComplete="off"
                    value={secretKey}
                    onChange={(e) => {
                      setSecretKey(e.target.value);
                    }}
                  />
                </div>
              ) : null}

              <input
                type="submit"
                value="Sign up"
                className="bttn"
                onClick={PostData}
              />
            </form>

            <form
              method="POST"
              className="sign-up-form"
              onSubmit={handleSubmit}
            >
              <h2 className="title">Sign Up</h2>
              <div className="input-field">
                <i className="fas fa-user" htmlFor="username"></i>

                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  id="username"
                  value={values.username2}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.username2 && touched.username2 ? (
                  <small className="form-error">{errors.username2}</small>
                ) : null}
              </div>

              <div className="input-field">
                <i className="fas fa-lock" htmlFor="password"></i>

                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  value={values.password2}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password2 && touched.password2 ? (
                  <small className="form-error">{errors.password2}</small>
                ) : null}
              </div>
              <input
                type="submit"
                value="Login"
                className="bttn"
                onClick={PostData}
              />

              <p className="social-text">Or sign in with social platform</p>
              <div className="social-media">
                <a href="/" className="social-icon">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="/" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="/" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="/" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
          <div className="panel-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>New to NewsBits?</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
                  ut quas deleniti recusandae quam quidem!
                </p>
                <button
                  className="bttn "
                  id="signUpBtn"
                  // onClick={signUpTransition}
                >
                  Sign up
                </button>
              </div>

              <img
                src="https://thumbs.dreamstime.com/b/sign-up-edit-mail-icon-special-purple-round-button-sign-up-edit-mail-icon-isolated-special-purple-round-button-abstract-104795036.jpg"
                alt=""
                className="image"
              />
            </div>

            <div className="panel right-panel">
              <div className="content">
                <h3>Already signed up?</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
                  ut quas deleniti recusandae quam quidem!
                </p>

                <Link className="linkText" to="/Login">
                  <button className="bttn " id="signInBtn">
                    Log in
                  </button>
                </Link>
              </div>
              {/* <i class="fa-solid fa-user fa-flip image"></i> */}
              <img
                src="https://img.lovepik.com/element/45009/2341.png_860.png"
                alt=""
                className="image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { userType };
export default SignUp;
