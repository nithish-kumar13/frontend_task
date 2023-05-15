import React from "react";
import JobCard from "./JobCard";

const JobCardLists = () => {
  const jobCardData = [
    {
      jobTitle: "UX UI Designer",
      jobCompany: "Great Vibes - Information Technology",
      jobLoc: "Chennai, Tamilnadu, India (In-office)",
      jobTime: "Part-Time (9.00 am - 5.00 pm IST)",
      jobExperience: "Experience (1 - 2 years)",
      jobSalary: "INR (₹) 30,000 - 50,000 / Month",
      employees: "51-200 employees",
      external: false,
    },
    {
      jobTitle: "Developer",
      jobCompany: "Great Vibes - Information Technology",
      jobLoc: "Chennai, Tamilnadu, India (In-office)",
      jobTime: "Part-Time (9.00 am - 5.00 pm IST)",
      jobExperience: "Experience (1 - 2 years)",
      jobSalary: "INR (₹) 50,000 - 70,000 / Month",
      employees: "51-200 employees",
      external: true,
    },
    {
      jobTitle: "Interaction Designer",
      jobCompany: "Great Vibes - Information Technology",
      jobLoc: "Chennai, Tamilnadu, India (In-office)",
      jobTime: "Part-Time (9.00 am - 5.00 pm IST)",
      jobExperience: "Experience (1 - 2 years)",
      jobSalary: "INR (₹) 30,000 - 50,000 / Month",
      employees: "51-200 employees",
      external: true,
    },
    {
      jobTitle: "SEO Analyst",
      jobCompany: "Great Vibes - Information Technology",
      jobLoc: "Chennai, Tamilnadu, India (In-office)",
      jobTime: "Part-Time (9.00 am - 5.00 pm IST)",
      jobExperience: "Experience (1 - 2 years)",
      jobSalary: "INR (₹) 30,000 - 50,000 / Month",
      employees: "51-200 employees",
      external: false,
    },
  ];
  return (
    <div className="grid grid-cols-2 my-12 gap-16 w-full">
      {jobCardData.map((item, i) => (
        <JobCard
          key={i}
          jobTitle={item.jobTitle}
          jobCompany={item.jobCompany}
          jobLoc={item.jobLoc}
          jobTime={item.jobTime}
          jobExperience={item.jobExperience}
          jobSalary={item.jobSalary}
          employees={item.employees}
          external={item.external}
        />
      ))}
    </div>
  );
};

export default JobCardLists;
