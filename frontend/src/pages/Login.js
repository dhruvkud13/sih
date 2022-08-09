import React, { useState } from "react";
import {
  AiOutlineUser,
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineLogin,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { loginFailure, loginSuccess, loginStart } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import loginimage from "../images/loginimage.svg";
import Fade from "react-reveal/Fade";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signin", { username, password });
      console.log(res.data);
      dispatch(loginSuccess(res.data));
      if (res.data.typeofuser === "admin") {
        navigate("/admin");
      } else {
        navigate("/user");
      }
    } catch (err) {
      dispatch(loginFailure());
    }
  };
  return (
    <div className="flex">
      <div className="min-h-screen justify-center items-center flex w-1/2">
        <img src={loginimage} alt="login" height="800" width="800" />
      </div>
      <Fade right>
        <div className="flex flex-col items-center justify-center min-h-screen font-raleway w-1/2">
          <div className="h-96 w-[32rem] rounded-xl bg-bgblue flex flex-col items-center justify-center">
            <div className="flex flex-row">
              <div className="flex justify-center items-center pr-2">
                <AiOutlineLogin size={30} color="#ffffff" />
              </div>
              <div className=" font-semibold text-white text-[30px]">Login</div>
            </div>
            <div className="text-sm text-white mb-5 tracking-tight">
              To access the most secure document storage
            </div>
            <div className="rounded-full mt-2">
              <div className="flex border-none text-sm  text-black bg-white outline-none px-3 pb-3 pt-2 rounded-2xl">
                <div className="flex flex-col ">
                  <div className=" text-txtgrey text-[12px]">Username</div>
                  <input
                    type="text"
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
                  <div className=" text-txtgrey text-[12px]">Password</div>
                  <input
                    type={passwordShown ? "text" : "password"}
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
            <div className="flex justify-between w-96 mt-3 text-white text-sm cursor-pointer">
              <div
                className="hover:font-semibold duration-100"
                onClick={()=>navigate("/signup")}
              >
                New here? Sign up
              </div>
              <div className="hover:font-semibold duration-100">
                Forgot Password?
              </div>
            </div>
            <div className="mt-6">
              <button
                onClick={handleLogin}
                className=" bg-white  hover:bg-bgblue duration-200 hover:text-white px-4 py-2 rounded-2xl text-[16px] font-semibold"
              >
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Login;
