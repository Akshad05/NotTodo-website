import React, { Component } from "react";
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
      <li className="sideText">
        <i class="fa-solid fa-gear fa-spin"></i>Settings
      </li>
      <li className="sideText">
        <i class="fa-solid fa-phone fa-shake"></i>Contact Us
      </li>
      <li className="sideText">
        <i class="fa-solid fa-address-card fa-fade"></i>About Us
      </li>
      <Link className="linkText" to="/Feedback">
        <li className="sideText">
          <i class="fa-solid fa-comment fa-bounce"></i>Feedback
        </li>
      </Link>
      {/* <li className="sideText">LinkedIn</li> */}

      <Link className="linkText" to="/About">
        <li className="sideText">
          <i class="fa-solid fa-user"></i>Profile
        </li>
      </Link>
    </div>
  );
};
export default Sidebar;
