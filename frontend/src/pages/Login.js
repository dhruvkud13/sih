import React, { useState } from "react";
import {
  AiOutlineUser,
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineLogin,
} from "react-icons/ai";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-full font-raleway">
      <div className="h-96 w-96 rounded-xl bg-bgblue flex flex-col items-center justify-center">
        <div className="flex flex-row">
          <div className="flex justify-center items-center pr-2">
            <AiOutlineLogin size={30} color="#ffffff" />
          </div>
          <div className=" font-semibold text-white text-[30px]">login</div>
        </div>
        <div className="text-xs text-white mb-5">
          To access the most secure document storage
        </div>
        <div className="rounded-full mt-2">
          <div className="flex border-none text-sm  text-black bg-white outline-none px-3 pb-3 pt-2 rounded-2xl">
            <div className="flex flex-col ">
              <div className=" text-txtgrey text-[12px]">Username</div>
              <input
                type="text"
                className="text-black relative  border-none bg-transparent outline-none w-64"
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
              <div className=" text-txtgrey text-[12px]">Password</div>
              <input
                type={passwordShown ? "text" : "password"}
                className="text-black relative  border-none bg-transparent outline-none w-64"
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
        <div className="flex justify-between w-72 mt-3 text-white text-xs ">
          <div className="hover:font-semibold duration-100">New here? Sign up</div>
          <div className="hover:font-semibold duration-100">Forgot Password?</div> 
        </div>
        <div className="mt-6">
          <button className=" bg-white  hover:bg-bgblue duration-200 hover:text-white px-4 py-2 rounded-2xl text-[16px] font-semibold">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
