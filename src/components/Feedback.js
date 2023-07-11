import React from "react";
import { useFormik } from "formik";
import { signInSchema } from "../schemas";
import { Link } from "react-router-dom";

const Feedback = () => {
  const initialValues = {
    username: "",
    password: "",
    // email: "",
    // username2: "",
    // password2: "",
  };

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,

      validationSchema: signInSchema,
      // validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  console.log(errors);

  return (
    <div className="body">
      <div className="loginContainer">
        <div className="closeArea">
          <Link className="linkText" to="/">
            <button className="closeButtonLeft">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </Link>
        </div>
        <div className="signin-signup feedContainer">
          <form className="sign-in-form feedCont" onSubmit={handleSubmit}>
            {/* <h2 className="title"></h2> */}
            <div>
              <div className="feedHeadline">
                Please provide feedback on the quality of service
              </div>
              <div className="radioButtons">
                <input
                  type="radio"
                  name="feedRadio"
                  value="Excellent"
                  id="Excellent"
                />
                <label htmlFor="Excellent" className="radio">
                  Excellent
                </label>
                <input
                  type="radio"
                  name="feedRadio"
                  value="veryGood"
                  id="veryGood"
                />
                <label htmlFor="veryGood" className="radio">
                  Very Good
                </label>

                <input type="radio" name="feedRadio" value="Good" id="Good" />
                <label htmlFor="Good" className="radio">
                  Good
                </label>

                <input
                  type="radio"
                  name="feedRadio"
                  value="average"
                  id="average"
                />
                <label htmlFor="average" className="radio">
                  Average
                </label>

                <input type="radio" name="feedRadio" value="Poor" id="Poor" />
                <label htmlFor="Poor" className="radio">
                  Poor
                </label>
              </div>

              {/* <i className="fas fa-user" htmlFor="username"></i> */}
              <div className="feedHeadline">Give your suggestions here</div>
              <textarea
                className="textarea"
                rows="4"
                column="50"
                placeholder="Enter text"
                name="username"
                id="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {/* {errors.username && touched.username ? (
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
              ) : null} */}
            </div>
            <div className="feedHeadline">
              Please provide feedback on the quality of service
            </div>
            <div className="radioButtons">
              <input
                type="radio"
                name="feedRadio"
                value="Excellent"
                id="Excellent"
              />
              <label htmlFor="Excellent" className="radio">
                Excellent
              </label>
              <input
                type="radio"
                name="feedRadio"
                value="veryGood"
                id="veryGood"
              />
              <label htmlFor="veryGood" className="radio">
                Very Good
              </label>

              <input type="radio" name="feedRadio" value="Good" id="Good" />
              <label htmlFor="Good" className="radio">
                Good
              </label>

              <input
                type="radio"
                name="feedRadio"
                value="average"
                id="average"
              />
              <label htmlFor="average" className="radio">
                Average
              </label>

              <input type="radio" name="feedRadio" value="Poor" id="Poor" />
              <label htmlFor="Poor" className="radio">
                Poor
              </label>
            </div>

            <input type="submit" value="Submit" className="bttn" />
          </form>
          <form className="sign-up-form" onSubmit={handleSubmit}></form>
        </div>
        <div className="panel-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Member of Brand?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
                ut quas deleniti recusandae quam quidem!
              </p>
            </div>
            {/* <img src="signin.svg" alt="" className="image" /> */}
          </div>

          <div className="panel right-panel">
            <div id="feedback" className="content">
              <h3 className="feedText" style={{ fontSize: 50 }}>
                FeedBack Form
              </h3>
            </div>
            <i class="fa-solid fa-comment fa-bounce fa-2xl feedIcon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
