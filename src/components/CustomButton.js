import React from "react";

const CustomButton = (props) => {
  const {
    buttonName = "",
    outline = false,
    selfEnd = false,
    onClick = () => {},
  } = props;
  const buttonClasses = selfEnd ? "self-end mt-24" : "";
  const buttonStyle = !outline
    ? `bg-primary text-white font-medium py-2 px-3 rounded text-base ${buttonClasses}`
    : `border border-primary text-primary font-medium py-2 px-3 rounded text-base ${buttonClasses}`;
  return (
    <button className={buttonStyle} onClick={onClick}>
      {buttonName}
    </button>
  );
};

export default CustomButton;
