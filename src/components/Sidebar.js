import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Sidebar = ({ sidebar }) => {
  return (
    <div className={sidebar ? "sideBar sideBar--open" : "sideBar"}>
      <Link className="linkText" to="/Login">
        <li className="sideText">
          <i class="fa-solid fa-user fa-flip"></i>Login
        </li>
      </Link>

      <Link className="linkText" to="/About">
        <li className="sideText">
          <i class="fa-solid fa-address-card fa-fade"></i>Profile
        </li>
      </Link>
      <a style={{ color: "white" }} href="#contactUs">
        <li className="sideText">
          <i class="fa-solid fa-phone fa-shake"></i>Contact Us
        </li>
      </a>
      <Link className="linkText" to="/AboutUs">
        <li className="sideText">
          <i class="fa-solid fa-address-card fa-fade"></i>About Us
        </li>
      </Link>
      <Link className="linkText" to="/Feedback">
        <li className="sideText">
          <i class="fa-solid fa-comment fa-bounce"></i>Feedback
        </li>
      </Link>
    </div>
  );
};
export default Sidebar;
