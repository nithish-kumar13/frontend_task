import React from "react";
import FormHeader from "./FormHeader";
import CustomButton from "../CustomButton";

const FormContainer = (props) => {
  return (
    <form className="bg-white p-8 w-5/12 h-full flex flex-col rounded-sm border-1 border-cardBorder mb-7 ">
      <FormHeader {...props} />
      {props.children}
      <CustomButton {...props} selfEnd />
    </form>
  );
};

export default FormContainer;
