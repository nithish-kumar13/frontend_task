import React from "react";
import RadioButtonWithLabel from "./RadioButtonWithLabel";

const LabeledInput = (props) => {
  const {
    labelName = "",
    placeholderName,
    required = false,
    type = "text",
  } = props;

  let placeholderValue = [];

  if (typeof placeholderName === "string") {
    placeholderValue.push(placeholderName);
  } else if (Array.isArray(placeholderName)) {
    placeholderValue = placeholderName;
  }

  return (
    <div className="mb-6 basis-1/2">
      <label className="block font-medium mb-1.5 font-poppins font-label text-sm text-dark">
        {labelName}
        {required && <span className="text-error">*</span>}
      </label>
      {type === "text" ? (
        <div className="flex flex-row gap-6">
          {placeholderValue?.map((item, i) => (
            <input
              key={i}
              type={type}
              placeholder={item}
              className={`w-full px-3 py-2 border border-cardBorder rounded-md font-poppins font-normal placeholder-placeholder::placeholder font-medium ${
                placeholderValue?.length > 2 ? "basis-1/2" : ""
              }`}
            />
          ))}
        </div>
      ) : (
        <RadioButtonWithLabel {...props} />
      )}
    </div>
  );
};

export default LabeledInput;
