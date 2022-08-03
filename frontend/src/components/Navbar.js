import React from "react";
const Navbar = () => {
  return (
    <div className={style.navbarStyle}>
      <div className="font-raleway font-bold text-2xl cursor-pointer">ICCR dms</div>
      <button
        type="button"
        className={style.buttonStyle}
      >
        Log Out
      </button>
    </div>
  );
};
const style = {
  navbarStyle:
    "min-w-full sticky shadow-md w-full h-16 bg-white flex justify-between px-5 items-center",
  buttonStyle:
    "text-white bg-purple hover:bg-bgdark duration-300 focus:outline-none text-raleway focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900",
};
export default Navbar;
