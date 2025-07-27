// src/components/FormAForm.js
import React, { useState } from 'react';

const FormAForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    employeeIdNumber: '',
    zssfNumber: '',
    zanIdNumber: '',
    department: '',
    academicQualification: '',
    gender: '',
    phoneNo: '',
    email: '',
    position: '',
    dateOfBirth: '',
    dateOfFirstAppointment: '',
    currentPositionDate: '',
    promotionDate: '',
    evaluationPeriod: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8080/api/form-a', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to submit form');

      const result = await res.json();
      alert('Form sent successfully!');
      console.log(result);
    } catch (err) {
      console.error(err);
      alert('Error sending form');
    }
  };

  const inputClass =
    'w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500';

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg text-black">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Staff Performance Evaluation - Form A
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Section: Personal Information */}
        <section>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="fullname" placeholder="Full Name" onChange={handleChange} required className={inputClass} />
            <input name="employeeIdNumber" placeholder="Employee ID Number" onChange={handleChange} required className={inputClass} />
            <input name="email" placeholder="Email Address" onChange={handleChange} required className={inputClass} />
            <input name="phoneNo" placeholder="Phone Number" onChange={handleChange} required className={inputClass} />
            <input type="date" name="dateOfBirth" placeholder="Date of Birth" onChange={handleChange} required className={inputClass} />
            <select name="gender" onChange={handleChange} required className={inputClass}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </section>

        {/* Section: Job Information */}
        <section>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Job Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="zssfNumber" placeholder="ZSSF Number" onChange={handleChange} className={inputClass} />
            <input name="zanIdNumber" placeholder="Zanzibar ID Number" onChange={handleChange} className={inputClass} />
            <input name="department" placeholder="Department" onChange={handleChange} className={inputClass} />
            <input name="position" placeholder="Current Position" onChange={handleChange} className={inputClass} />
            <input name="academicQualification" placeholder="Academic Qualification" onChange={handleChange} className={inputClass} />
            <input type="date" name="dateOfFirstAppointment" onChange={handleChange} className={inputClass} />
            <input type="date" name="currentPositionDate" onChange={handleChange} className={inputClass} />
            <input type="date" name="promotionDate" onChange={handleChange} className={inputClass} />
            <input name="evaluationPeriod" placeholder="Evaluation Period (e.g. 2023-2024)" onChange={handleChange} required className={inputClass} />
          </div>
        </section>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit Form A
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAForm;
