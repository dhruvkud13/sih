import React from "react";
const Navbar = () => {
  var [isLoggedIn, setIsLoggedIn] = React.useState(true);
  return (
    <div className={style.navbarStyle}>
      <div className="font-raleway  text-2xl cursor-pointer text-white">
        ICCR<span className="font-extrabold ml-1">DMS</span>
      </div>
      {isLoggedIn ? (
        <button type="button" className={style.buttonStyle}>
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
    "min-w-full fixed shadow-md w-full h-16 bg-govtblue flex justify-between px-5 items-center",
  buttonStyle:
    "text-white bg-bgblue hover:bg-bgdark duration-300 focus:outline-none text-raleway font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2",
};
export default Navbar;
