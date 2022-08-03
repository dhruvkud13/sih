import React from "react";
import logo from "../images/iccrr-logo.png";
import Fade from "react-reveal/Fade";
import "@fontsource/league-spartan";
const LandingPage = () => {
  return (
    <div className="pt-16">
      <Fade bottom>
        <div className="min-w-full px-72 pt-5">
          <img src={logo}></img>
        </div>

        <div className="text-5xl font-league font-extrabold text-logoblue min-w-full flex justify-center tracking-wide">
          <div>Document Management System</div>
        </div>
      </Fade>
      <div className="flex justify-around mt-10">
        <div className="font-raleway font-bold text-4xl flex flex-col items-start justify-center">
          <Fade left cascade>
            <div>A secure way </div>
            <div>to store and secure</div>
            <div>your documents</div>
          </Fade>
        </div>
        <div>hi</div>
      </div>
    </div>
  );
};

export default LandingPage;