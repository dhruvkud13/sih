import React from "react";
import logo from "../images/iccrr-logo.png";
import Fade from "react-reveal/Fade";
import Landing from "../images/landing.png";
import "@fontsource/league-spartan";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate=useNavigate();
  const style = {
    loginStyle:
      "text-white hover:text-govtblue bg-bgblue hover:bg-white duration-300 focus:outline-none text-raleway font-medium rounded-full text-xl px-10 py-5 text-center mb-2",
      signupStyle:
      "text-white hover:text-govtblue bg-govtblue hover:bg-white duration-300 focus:outline-none text-raleway font-medium rounded-full text-xl px-10 py-5 text-center mb-2",
  };
  return (
    <div className="">
      <Fade bottom>
        <div className="min-w-full px-72 pt-5">
          <img src={logo} alt="logo"></img>
        </div>

        <div className="text-5xl font-league font-extrabold text-logoblue min-w-full flex justify-center tracking-wide">
          <div>Document Management System</div>
        </div>
      </Fade>
      <div className="flex justify-evenly mt-10 h-96 items-center pt-10">
        <div className="font-raleway font-bold text-4xl flex flex-col items-start justify-center">
          <Fade left cascade>
            <div>A secure way </div>
            <div>to store and secure</div>
            <div>your documents.</div>
            <div className="pt-10 pb-2">To access our Features, Login here</div>
            <div className="flex justify-center"></div>
            <button
                    onClick={() => {
                      navigate("/login");
                    }}
                    type="button"
                    className={style.loginStyle}
                  >
                    Login
                  </button>
                  <div className="pt-10 pb-2">New Here? Sign Up</div>
            <button
                    onClick={() => {
                      navigate("/signup");
                    }}
                    type="button"
                    className={style.signupStyle}
                  >
                    Signup
                  </button>
          </Fade>
        </div>
        <div className="w-[30rem]"><img src={Landing} alt="dms pic" /></div>
      </div>
    </div>
  );
};

export default LandingPage;
