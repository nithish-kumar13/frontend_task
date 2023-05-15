import React from "react";
import image_1 from "../assets/images/image_1.png";
import CustomButton from "./CustomButton";

const JobCard = (props) => {
  const {
    external = false,
    jobTitle,
    jobCompany,
    jobLoc,
    jobTime,
    jobExperience,
    jobSalary,
    employees,
  } = props;
  return (
    <div className="w-full bg-white rounded-sm py-4 px-6 flex flex-col items-start">
      <div className="flex items-start w-full">
        <img
          alt="logo_company"
          className="w-12 h-12 rounded-md mr-2"
          src={image_1}
        />
        <div className="flex flex-col font-poppins">
          <p className="text-2xl font-normal text-dark">{jobTitle}</p>
          <p className="text-base font-normal text-dark">{jobCompany}</p>
          <p className="text-base font-normal text-gray">{jobLoc}</p>
          <p className="text-base text-darkGray mb-2 mt-6">{jobTime}</p>
          <p className="text-base text-darkGray mb-2">{jobExperience}</p>
          <p className="text-base text-darkGray mb-2">{jobSalary}</p>
          <p className="text-base text-darkGray mb-2 mb-6">{employees}</p>
          <div className="flex flex-row">
            <CustomButton
              buttonName={!external ? "Apply Now" : "External Apply"}
              outline={external}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
