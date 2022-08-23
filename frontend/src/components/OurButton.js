import React from "react";

const OurButton = (props) => {
  const style = {
    buttonStyle: `text-white ${
      props.textHoverColor == null
        ? "hover:text-govtblue"
        : "hover:text-" + props.textHoverColor
    } bg-${props.color == null ? "govtblue" : props.color} hover:bg-${
      props.hoverColor == null ? "white" : props.hoverColor
    } duration-300 focus:outline-none text-raleway font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2`,
  };
  return (
    <button onClick={props.onClick} type="button" className={style.buttonStyle}>
      {props.title}
    </button>
  );
};

export default OurButton;
