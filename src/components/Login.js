import React from "react";
import { useFormik } from "formik";
import { signInSchema } from "../schemas";
import { signUpSchema } from "../schemas/signUp";
import { Link, useHistory } from "react-router-dom";
import "./style.css";
import "./login.svg";
var init = true;
var schema = signInSchema;

const Login = () => {
  const history = useHistory();
  const signUpTransition = () => {
    // global = init;

    const container = document.querySelector(".loginContainer");
    container.classList.add("sign_up_mode");
    init = true;
    schema = signUpSchema;
  };

  const signInTransition = () => {
    // global = init;

    const container = document.querySelector(".loginContainer");
    container.classList.remove("sign_up_mode");
    init = false;
    schema = signInSchema;
  };
  var initialValues = {};

  if (!init) {
    // schema = signInSchema;
    initialValues = {
      email: "",
      password: "",
      // email: "",
      // username2: "",
      // password2: "",
    };
  } else {
    // schema = signUpSchema;
    initialValues = {
      email: "",
      username2: "",
      password2: "",
    };
  }
  // const initialValues2 = {
  //   email: "",
  //   username2: "",
  //   password2: "",
  // };

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,

      validationSchema: schema,
      // validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  console.log(errors);

  const PostData = async (e) => {
    e.preventDefault();

    const { email, password } = values;
    const res = await fetch("/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Login Crediencials");
      console.log("Invalid Login Crediencials");
    } else {
      window.alert("Logged In Successfully");
      console.log("Logged In Successfully");

      history.push("/");
    }
  };

  return (
    <>
      <div className="body">
        <div className="loginContainer">
          <div className="closeArea">
            <Link className="linkText" to="/">
              <button className="closeButtonLeft">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </Link>
          </div>
          <div className="signin-signup">
            <form className="sign-in-form" onSubmit={handleSubmit}>
              <h2 className="title">Log In</h2>
              <div className="input-field">
                {/* <i className="fas fa-user" htmlFor="username"></i> */}
                <i className="fas fa-envelope"></i>

                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.username && touched.username ? (
                  <small className="form-error">{errors.username}</small>
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
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <small className="form-error">{errors.password}</small>
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

            <form
              method="POST"
              className="sign-up-form"
              onSubmit={handleSubmit}
            >
              <h2 className="title">Sign Up</h2>
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
                  type="text"
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
                  type="confirmPassword"
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
                <h3>Already signed up?</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
                  ut quas deleniti recusandae quam quidem!
                </p>
                <button
                  className="bttn "
                  id="signInBtn"
                  onClick={signInTransition}
                >
                  Log in
                </button>
              </div>
              {/* <i class="fa-solid fa-user fa-flip image"></i> */}
              <img
                src="https://img.lovepik.com/element/45009/2341.png_860.png"
                alt=""
                className="image"
              />
            </div>

            <div className="panel right-panel">
              <div className="content">
                <h3>New to NewsBits?</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
                  ut quas deleniti recusandae quam quidem!
                </p>
                <Link className="linkText" to="/SignUp">
                  <button
                    className="bttn "
                    id="signUpBtn"
                    onClick={signUpTransition}
                  >
                    Sign up
                  </button>
                </Link>
              </div>
              {/* <img src="signup.svg" alt="" className="image" /> */}
              <img
                src="https://thumbs.dreamstime.com/b/sign-up-edit-mail-icon-special-purple-round-button-sign-up-edit-mail-icon-isolated-special-purple-round-button-abstract-104795036.jpg"
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

export default Login;
