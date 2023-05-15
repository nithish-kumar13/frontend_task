import React from "react";

const FormHeader = (props) => {
  const { stepName } = props;
  return (
    <div className="flex flex-row justify-between items-center pb-6">
      <p className="font-normal text-2xl text-formHeader font-poppins">Create a job</p>
      <p className="font-medium text-lg text-formHeader font-poppins">{stepName}</p>
    </div>
  );
};

export default FormHeader;
