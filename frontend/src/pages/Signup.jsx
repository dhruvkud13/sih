import axios from "axios";
import React, { useState } from "react";
import {
  AiOutlineUser,
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineLogin,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineCalendar,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import signupimage from "../images/signupimage.svg";
import Fade from "react-reveal/Fade";
import "./Signup.css";

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [cPassShown, setcPassShown] = useState(false);
  //signup functionality
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password does not match");
    } else {
      try {
        await axios.post("/auth/signup", {
          fullname,
          email,
          password: confirmPassword,
        });
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="justify-center items-center flex w-1/2">
        <img src={signupimage} alt="login" height="800" width="800" />
      </div>
      <Fade right>
        <div className="flex flex-col items-center justify-center w-1/2 font-raleway">
          <div className="h-[35rem] w-[32rem] rounded-xl bg-bgblue flex flex-col items-center justify-center mt-10">
            <div className="flex flex-row mb-1">
              <div className="flex justify-center items-center pr-2">
                <AiOutlineLogin size={25} color="#ffffff" />
              </div>
              <div className=" font-semibold text-white text-[25px]">
                Signup
              </div>
            </div>
            <div className="rounded-full mt-1">
              <div className="flex border-none text-sm  text-black bg-white outline-none px-3 pb-2 pt-1 rounded-2xl ">
                <div className="flex flex-col ">
                  <div className=" text-txtgrey text-[12px]">Fullname</div>
                  <input
                    type="text"
                    // value={username}
                    className="text-black relative  border-none bg-transparent outline-none w-[22rem]"
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </div>

                <div className="flex items-center justify-center mt-1">
                  <AiOutlineUser size={20} color="#979797" />
                </div>
              </div>
            </div>
            <div className="rounded-full mt-4">
              <div className="flex border-none text-sm  text-black bg-white outline-none px-3 pb-2 pt-1 rounded-2xl ">
                <div className="flex flex-col ">
                  <div className=" text-txtgrey text-[12px]">Contact No.</div>
                  <input
                    type="text"
                    // value={username}
                    className="text-black relative  border-none bg-transparent outline-none w-[22rem]"
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </div>

                <div className="flex items-center justify-center mt-1">
                  <AiOutlinePhone size={20} color="#979797" />
                </div>
              </div>
            </div>
            <div className="rounded-full mt-4">
              <div className="flex border-none text-sm  text-black bg-white outline-none px-3 pb-2 pt-1 rounded-2xl">
                <div className="flex flex-col ">
                  <div className=" text-txtgrey text-[12px]">Date Of Birth</div>
                  <input
                    type="date"
                    style={{ color: "grey" }}
                    // value={username}
                    className="text-black border-none bg-transparent outline-none w-[22rem]"
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </div>

                <div className="flex items-center justify-center">
                  {/* <AiOutlineCalendar size={20} color="#979797" className="fixed mr-4" /> */}
                </div>
              </div>
            </div>
            <div className="rounded-full mt-4">
              <div className="flex border-none text-sm  text-black bg-white outline-none px-3 pb-2 pt-1 rounded-2xl">
                <div className="flex flex-col ">
                  <div className=" text-txtgrey text-[12px]">Email</div>
                  <input
                    type="text"
                    // value={email}
                    className="text-black relative  border-none bg-transparent outline-none w-[22rem]"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex items-center justify-center mt-1">
                  <AiOutlineMail size={20} color="#979797" />
                </div>
              </div>
            </div>
            <div className="rounded-full mt-4">
              <div className="flex border-none text-sm  text-black bg-white outline-none px-3 pb-2 pt-1 rounded-2xl">
                <div className="flex flex-col ">
                  <div className=" text-txtgrey text-[12px]">Password</div>
                  <input
                    type={passwordShown ? "text" : "password"}
                    // value={password}
                    className="text-black relative  border-none bg-transparent outline-none w-[22rem]"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="flex items-center justify-center mt-1">
                  {passwordShown ? (
                    <AiOutlineEye
                      size={20}
                      onClick={() => {
                        setPasswordShown(!passwordShown);
                      }}
                      color="#979797"
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      size={20}
                      color="#979797"
                      onClick={() => {
                        setPasswordShown(!passwordShown);
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="rounded-full mt-4">
              <div className="flex border-none text-sm  text-black bg-white outline-none px-3 pb-2 pt-1 rounded-2xl">
                <div className="flex flex-col ">
                  <div className=" text-txtgrey text-[12px]">
                    Confirm Password
                  </div>
                  <input
                    type={cPassShown ? "text" : "password"}
                    // value={confirmPassword}
                    className="text-black relative  border-none bg-transparent outline-none w-[22rem]"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <div className="flex items-center justify-center mt-1">
                  {cPassShown ? (
                    <AiOutlineEye
                      size={20}
                      onClick={() => {
                        setcPassShown(!cPassShown);
                      }}
                      color="#979797"
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      size={20}
                      color="#979797"
                      onClick={() => {
                        setcPassShown(!cPassShown);
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div
                className="hover:font-semibold duration-100 mb-3 text-white"
                onClick={() => navigate("/login")}
              >
                Already a user? Login
              </div>
              <div className="flex justify-center ">
                <button
                  onClick={handleSignup}
                  className=" bg-white  hover:bg-bgblue duration-200 hover:text-white px-4 py-1 rounded-2xl text-[18px] font-semibold"
                >
                  SIGNUP
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default SignUp;
