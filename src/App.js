import "tailwindcss/tailwind.css";
import LabeledInput from "./components/LabeledInput";
import FormContainer from "./components/formContainer";
import JobCard from "./components/JobCard";
import JobCardLists from "./components/JobCardLists";

function App() {
  return (
    <div className="bg-optionBorder max-w-full max-h-full flex flex-col justify-center items-center pt-8 px-12">
      <FormContainer stepName="Step 1" buttonName="Next">
        <LabeledInput
          labelName="Job title"
          placeholderName="ex. UX UI Designer"
          required
        />
        <LabeledInput
          labelName="Company name"
          placeholderName="ex. Google"
          required
        />
        <LabeledInput
          labelName="Industry"
          placeholderName="ex. Information Technology"
          required
        />
        <div className="flex flex-row gap-6">
          <LabeledInput labelName="Location" placeholderName="ex. Chennai" />
          <LabeledInput
            labelName="Remote type"
            placeholderName="ex. In-office"
          />
        </div>
      </FormContainer>

      <FormContainer stepName="Step 2" buttonName="Save">
        <LabeledInput
          labelName="Experience"
          placeholderName={["Minimum", "Maximum"]}
        />
        <LabeledInput
          labelName="Salary"
          placeholderName={["Minimum", "Maximum"]}
        />
        <LabeledInput labelName="Total employee" placeholderName="ex. 100" />
        <LabeledInput
          labelName="Apply type"
          optionName={["Quick apply", "External apply"]}
          type="radio"
        />
      </FormContainer>

      <JobCard
        jobTitle="UX UI Designer"
        jobCompany="Great Vibes - Information Technology"
        jobLoc="Chennai, Tamilnadu, India (In-office)"
        jobTime="Part-Time (9.00 am - 5.00 pm IST)"
        jobExperience="Experience (1 - 2 years)"
        jobSalary="INR (₹) 30,000 - 50,000 / Month"
        employees="51-200 employees"
      />

      <JobCardLists />
    </div>
  );
}

export default App;
