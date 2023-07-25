import React from "react";
import { Link } from "react-router-dom";
import NewsBitsIcon from "./NewsBitsIcon.jpeg";

const AboutUs = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutBlock1">
        <h1>About Us</h1>
        <img src={NewsBitsIcon} alt="Text Summarization" />
        <p>
          This is a news providing website with a great feature of News
          Summarization which provides a summary of the selected news. News
          Summarizer is a Trained AI model. It saves users time and provides you
          point to point news summary. User can easily Register and login on our
          website to use our premium News Summarization feature
        </p>
      </div>

      <div className="aboutBlock2">
        <Link to="/Privacy">
          <div className="aboutBox">Privacy Policy</div>
        </Link>
        <Link to="/Terms">
          <div className="aboutBox">Terms & Conditions</div>
        </Link>
        <Link to="/Disclaimer">
          <div className="aboutBox">Disclaimer</div>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
