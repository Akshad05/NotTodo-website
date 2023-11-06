import React from "react";
import { useFormik } from "formik";
import { signInSchema } from "../schemas";
import { Link } from "react-router-dom";

const Feedback = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,

    validationSchema: signInSchema,
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
