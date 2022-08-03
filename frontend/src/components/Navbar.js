import React from "react";
const Navbar = () => {
  var [isLoggedIn, setIsLoggedIn] = React.useState(true);
  return (
    <div className={style.navbarStyle}>
      <div className="font-raleway font-bold text-2xl cursor-pointer">
        ICCR dms
      </div>
      {isLoggedIn ? (
        <button type="button" className={style.buttonStyle}>Logout</button>
      ) : (
        <div></div>
      )}
    </div>
  );
};
const style = {
  navbarStyle:
    "min-w-full fixed shadow-md w-full h-16 bg-white flex justify-between px-5 items-center",
  buttonStyle:
    "text-white bg-purple hover:bg-bgdark duration-300 focus:outline-none text-raleway focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900",
};
export default Navbar;
