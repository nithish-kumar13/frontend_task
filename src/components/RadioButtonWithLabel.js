import React from "react";

const RadioButtonWithLabel = (props) => {
  const { optionName } = props;

  let options = [];

  if (typeof optionName === "string") {
    options.push(optionName);
  } else if (Array.isArray(optionName)) {
    options = optionName;
  }

  return (
    <div className="flex flex-row gap-4 items-center">
      {options?.map((item, i) => (
        <div className="flex items-center" key={i}>
          <input
            type="radio"
            id={`radioButton_${item}`}
            name="radioGroup"
            className="h-5 w-5 text-poppins focus:ring-indigo-500 border-optionBorder border-2"
          />
          <label
            className="ml-2 font-medium text-sm font-poppins font-label text-placeholder"
          >
            {item}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioButtonWithLabel;
