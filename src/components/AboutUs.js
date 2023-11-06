import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutBlock1">
        <h1>About Us</h1>

        <p>
          Founded in 2004 and headquartered in New York City, SJ Innovation
          constantly strives to deliver custom solutions to fuel client success.
          We're an ISO-certified, Clutch-recognized, Certified NYC Minority
          Owned Business Enterprise(MBE), and INC. 5000-recognized company and
          are committed to excellence and fostering lasting business
          relationships. It’s what has earned us a thriving reputation over the
          last nineteen years!
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
