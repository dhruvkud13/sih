import React, { useState } from "react";
import {
  AiOutlineUser,
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineLogin,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import signupimage from "../images/signupimage.svg";
import Fade from "react-reveal/Fade";
import "./Signup.css";
import validator from "validator";
import { Spin } from "antd";

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [cPassShown, setcPassShown] = useState(false);
  //signup functionality
  const [name, setname] = useState("");
  const [contact, setContact] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);  
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    setLoading(true);
    e.preventDefault();
    const isValid = validator.isEmail(email);
    const isNumber = validator.isMobilePhone(contact, "en-IN");
    const isDob = validator.isDate(dob, "YYYY-MM-DD");
    const isName = validator.matches(name, /^[a-zA-Z ]*.{2,}$/);
    const isPass = validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumeric: 1,
      minSymbol: 1,
    });

    // console.log(isValid);
    if (!isName) {
      setError("Name format is invalid");
    } else if (!isNumber) {
      setError("Contact format is invalid");
    } else if (!isDob) {
      setError("Date format is invalid");
    } else if (!isValid) {
      setError("Email format is invalid");
    } else if (!isPass) {
      setError(
        "Please enter a strong password (password must contain atleast 8 characters, 1 lowercase, 1 uppercase, 1 numeric and 1 symbol)"
      );
    } else if (password !== confirmPassword) {
      setError("Passwords don't match");
    } else {
      try {
        const body = { name, email, contact, dob, password };
        //console.log(JSON.stringify(body));
        await fetch("http://localhost:8000/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setLoading(false);
            console.log(data);
          });
        navigate("/login");
      } catch (err) {
        setLoading(false);
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
        <div className="flex flex-col items-center justify-start w-1/2 font-raleway">
          <div className="h-[40rem] w-[32rem] rounded-xl bg-bgblue flex flex-col items-center justify-center mt-10">
            <div className="flex flex-row mb-2">
              <div className="flex justify-center items-center pr-2">
                <AiOutlineLogin size={30} color="#ffffff" />
              </div>
              <div className=" font-semibold text-white text-[30px]">
                Signup
              </div>
            </div>
            <div className="rounded-full mt-2">
              <div className="flex border-none text-sm  text-black bg-white outline-none px-3 pb-3 pt-2 rounded-2xl ">
                <div className="flex flex-col ">
                  <div className=" text-txtgrey text-[12px]">Name</div>
                  <input
                    type="text"
                    // value={name}
                    className="text-black relative  border-none bg-transparent outline-none w-[22rem]"
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>

                <div className="flex items-center justify-center mt-1">
                  <AiOutlineUser size={20} color="#979797" />
                </div>
              </div>
            </div>
            <div className="rounded-full mt-4">
              <div className="flex border-none text-sm  text-black bg-white outline-none px-3 pb-3 pt-2 rounded-2xl ">
                <div className="flex flex-col ">
                  <div className=" text-txtgrey text-[12px]">Contact No.</div>
                  <input
                    type="text"
                    // value={username}
                    className="text-black relative  border-none bg-transparent outline-none w-[22rem]"
                    onChange={(e) => setContact(e.target.value)}
                    defaultValue="+91"
                  />
                </div>

                <div className="flex items-center justify-center mt-1">
                  <AiOutlinePhone size={20} color="#979797" />
                </div>
              </div>
            </div>
            <div className="rounded-full mt-4">
              <div className="flex border-none text-sm  text-black bg-white outline-none px-3 pb-3 pt-2 rounded-2xl">
                <div className="flex flex-col ">
                  <div className=" text-txtgrey text-[12px]">Date Of Birth</div>
                  <input
                    type="date"
                    max={new Date().toISOString().split("T")[0]}
                    style={{ color: "black" }}
                    required
                    // value={username}
                    className="text-black border-none bg-transparent outline-none w-[22rem]"
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>

                <div className="flex items-center justify-center mt-1 absolute">
                  {/* <BsCalendarDate size={30} color="#979797" className="pr-4"  /> */}
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

            <div
              className="hover:font-semibold duration-100 text-white cursor-pointer mt-3"
              onClick={() => navigate("/login")}
            >
              Already a user? Login
            </div>

            {error && (
              <div className="text-red-500 text-sm mt-1 px-10 mb-3">
                {error}
              </div>
            )}
            <div className="">
              <button
                onClick={handleSignup}
                className=" bg-white  hover:bg-bgblue duration-200 hover:text-white px-6 py-2 rounded-2xl text-[18px] font-semibold ml-5 mb-1"
              >
                SIGNUP
              </button>
            </div>
          </div>
        </div>
      </Fade>
      {loading && <div className="absolute flex min-h-full min-w-full items-center justify-center"><Spin /></div>}
    </div>
  );
};

export default SignUp;
