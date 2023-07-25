import React from "react";
import { Link } from "react-router-dom";
import newsGif from "./gifNews.gif";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const websiteName = "NewsBits";

  return (
    <>
      <div className="footerContainer">
        {/* <div className="footerHeader">NewsBits</div> */}
        <div className="footerMid">
          <div className="footerContainer1">
            <img src={newsGif} alt="" />
          </div>
          <div className="footerContainer2">
            <h2>Links</h2>
            <Link className="linkText" to="/Login">
              <li className="">
                <i
                  style={{ paddingRight: "5px" }}
                  class="fa-sharp fa-solid fa-star"
                ></i>
                Login
              </li>
            </Link>

            <Link className="" to="/SignUp">
              <li className="">
                <i
                  style={{ paddingRight: "5px" }}
                  class="fa-sharp fa-solid fa-star"
                ></i>
                SignUp
              </li>
            </Link>

            {/* <li className="sideText">
        <i class="fa-solid fa-gear fa-spin"></i>Settings
      </li>
      <li className="sideText">
        <i class="fa-solid fa-phone fa-shake"></i>Contact Us
      </li>
      <li className="sideText">
        <i class="fa-solid fa-address-card fa-fade"></i>About Us
      </li> */}
            <Link className="linkText" to="/Feedback">
              <li className="">
                <i
                  style={{ paddingRight: "5px" }}
                  class="fa-sharp fa-solid fa-star"
                ></i>
                Feedback
              </li>
            </Link>
            {/* <li className="sideText">LinkedIn</li> */}

            <Link className="linkText" to="/About">
              <li className="">
                <i
                  style={{ paddingRight: "5px" }}
                  class="fa-sharp fa-solid fa-star"
                ></i>
                Profile
              </li>
            </Link>
          </div>
          <div id="contactUs" className="footerContainer3">
            <h2>Contact Us</h2>
            <a href="/" style={{ border: "none" }} className="social-icon">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="/" style={{ border: "none" }} className="social-icon">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="/" style={{ border: "none" }} className="social-icon">
              <i className="fab fa-google"></i> Google
            </a>
            <a href="/" style={{ border: "none" }} className="social-icon">
              <i className="fab fa-linkedin-in"></i>
              LinkedIn
            </a>
          </div>
        </div>
        <div className="footerBottom">
          <p>
            © {currentYear} {websiteName}. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
