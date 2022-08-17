import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import axios from "axios";
import { useSelector } from "react-redux";
const Navbar = () => {
  const navigate= useNavigate();
  const dispatch= useDispatch();
  const{user}=useSelector(state=>state.user);
  const logoutUser = async () => {
    dispatch(logout());
    navigate("/");
    try {
        const res = await axios.get("auth/logout")
        console.log(res);
    } catch (e) {
        console.log(e.response);

    }
}
  return (
    <div className={style.navbarStyle}>
      <div className="font-raleway  text-2xl cursor-pointer text-white">
        ICCR<span className="font-extrabold ml-1">DMS</span>
      </div>
      {user!=null ? (
        <button onClick={logoutUser} type="button" className={style.buttonStyle}>
          Logout
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};
const style = {
  navbarStyle:
    "min-w-full sticky-top shadow-md w-full h-16 bg-govtblue flex justify-between px-5 items-center",
  buttonStyle:
    "text-white bg-bgblue hover:bg-bgdark duration-300 focus:outline-none text-raleway font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2",
};
export default Navbar;
