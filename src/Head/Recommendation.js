import React, { useState } from "react";
import axios from "axios";

const initialState = {
  annualSalaryIncrement: false,
  doubleSalaryOrBonus: false,
  promotion: false,
  accelerationPromotion: false,
  noAnnualIncrement: false,
  training: false,
  internalTransfer: false,
  warningLetter: false,
  demotion: false,
  jobReassignment: false,
  probationExtension: false,
  verifierName: "",
  verifierPosition: "",
  verifierDepartmentOrUnit: "",
};

export default function Recommendation() {
  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "radio") {
      setFormData((prev) => ({
        ...prev,
        [name]: value === "true",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/recommendations", formData);
      setSubmitted(true);
      setFormData(initialState);
      setTimeout(() => setSubmitted(false), 5000); // success msg disappears after 5s
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Failed to submit recommendation.");
    }
  };

  const RadioGroup = ({ label, name, value, onChange }) => (
    <div className="flex items-center justify-between mb-4">
      <label htmlFor={name} className="w-1/2 text-left font-medium text-gray-800 text-lg">
        {label}
      </label>
      <div className="flex gap-10 w-1/2 justify-end text-lg">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name={name}
            value="true"
            checked={value === true}
            onChange={onChange}
            className="form-radio h-5 w-5 text-green-600"
          />
          <span className="ml-2">Yes</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name={name}
            value="false"
            checked={value === false}
            onChange={onChange}
            className="form-radio h-5 w-5 text-red-600"
          />
          <span className="ml-2">No</span>
        </label>
      </div>
    </div>
  );

  const TextInput = ({ label, name, value, onChange, placeholder }) => (
    <div className="flex items-center justify-between mb-4">
      <label htmlFor={name} className="w-1/2 text-left font-medium text-gray-800 text-lg">
        {label}
      </label>
      <input
        id={name}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-1/2 border border-gray-300 rounded px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
      {submitted && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-800 text-center rounded text-lg font-semibold">
          Form submitted successfully!
        </div>
      )}

      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Recommendation Form
      </h2>

      <form onSubmit={handleSubmit}>
        {[
          { label: "Annual Salary Increment", name: "annualSalaryIncrement" },
          { label: "Double Salary Or Bonus", name: "doubleSalaryOrBonus" },
          { label: "Promotion", name: "promotion" },
          { label: "Acceleration Promotion", name: "accelerationPromotion" },
          { label: "No Annual Increment", name: "noAnnualIncrement" },
          { label: "Training", name: "training" },
          { label: "Internal Transfer", name: "internalTransfer" },
          { label: "Warning Letter", name: "warningLetter" },
          { label: "Demotion", name: "demotion" },
          { label: "Job Reassignment", name: "jobReassignment" },
          { label: "Probation Extension", name: "probationExtension" },
        ].map(({ label, name }) => (
          <RadioGroup
            key={name}
            label={label}
            name={name}
            value={formData[name]}
            onChange={handleChange}
          />
        ))}

        <TextInput
          label="Verifier Name"
          name="verifierName"
          value={formData.verifierName}
          onChange={handleChange}
          placeholder="Enter verifier name"
        />
        <TextInput
          label="Verifier Position"
          name="verifierPosition"
          value={formData.verifierPosition}
          onChange={handleChange}
          placeholder="Enter verifier position"
        />
        <TextInput
          label="Verifier Department/Unit"
          name="verifierDepartmentOrUnit"
          value={formData.verifierDepartmentOrUnit}
          onChange={handleChange}
          placeholder="Enter department or unit"
        />

        <button
          type="submit"
          className="mt-8 w-full bg-green-700 text-white font-bold text-xl py-3 rounded hover:bg-green-800 transition duration-300"
        >
          Submit Recommendation
        </button>
      </form>
    </div>
  );
}
