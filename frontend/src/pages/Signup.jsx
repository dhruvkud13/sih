import axios from "axios";
import React, { useState } from "react";
import {
  AiOutlineUser,
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineLogin,
  AiOutlineMail,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [cPassShown, setcPassShown] = useState(false);
  //signup functionality
  const [username, setUsername] = useState("");
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
          username,
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
    <div className="flex flex-col items-center justify-center min-h-screen min-w-full bg-white font-raleway">
      <div className="h-[32rem] w-[32rem] rounded-xl bg-bgblue flex flex-col items-center justify-center">
        <div className="flex flex-row mb-5">
          <div className="flex justify-center items-center pr-2">
            <AiOutlineLogin size={30} color="#ffffff" />
          </div>
          <div className=" font-semibold text-white text-[30px]">Signup</div>
        </div>
        <div className="rounded-full mt-2">
          <div className="flex border-none text-sm  text-black bg-white outline-none px-3 pb-3 pt-2 rounded-2xl ">
            <div className="flex flex-col ">
              <div className=" text-txtgrey text-[12px]">Username</div>
              <input
                type="text"
                // value={username}
                className="text-black relative  border-none bg-transparent outline-none w-[22rem]"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-center mt-1">
              <AiOutlineUser size={20} color="#979797" />
            </div>
          </div>
        </div>
        <div className="rounded-full mt-4">
          <div className="flex border-none text-sm  text-black bg-white outline-none px-3 pb-3 pt-2 rounded-2xl">
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
          <div className="flex border-none text-sm  text-black bg-white outline-none px-3 pb-3 pt-2 rounded-2xl">
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
          <div className="flex border-none text-sm  text-black bg-white outline-none px-3 pb-3 pt-2 rounded-2xl">
            <div className="flex flex-col ">
              <div className=" text-txtgrey text-[12px]">Confirm Password</div>
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
        <div className="mt-8">
          <button
            onClick={handleSignup}
            className=" bg-white  hover:bg-bgblue duration-200 hover:text-white px-6 py-2 rounded-2xl text-[18px] font-semibold"
          >
            SIGNUP
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
