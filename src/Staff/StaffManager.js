// src/staff/StaffPage1.js
import React, { useState } from 'react';

const StaffManager = () => {
  const [formData, setFormData] = useState({
    dateOfFirstAppointment: '',
    currentPositionDate: '',
    promotionDate: '',
    evaluationPeriod: '',
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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data from StaffPage1:", formData);

    // Example API call:
    // fetch('/api/staff', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    // .then(res => res.json())
    // .then(result => console.log("Success:", result))
    // .catch(err => console.error("Error submitting form:", err));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10 text-black">
      <h2 className="text-3xl font-bold mb-6 text-center">Page 1: Fomu ya Upimaji Utendaji (Form A)</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>
          <label className="block mb-1">Full Name</label>
          <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
        </div>

        <div>
          <label className="block mb-1">Employee ID Number</label>
          <input type="text" name="employeeIdNumber" value={formData.employeeIdNumber} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
        </div>

        <div>
          <label className="block mb-1">ZSSF Number</label>
          <input type="text" name="zssfNumber" value={formData.zssfNumber} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block mb-1">ZAN ID Number</label>
          <input type="text" name="zanIdNumber" value={formData.zanIdNumber} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block mb-1">Department</label>
          <input type="text" name="department" value={formData.department} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block mb-1">Academic Qualification</label>
          <input type="text" name="academicQualification" value={formData.academicQualification} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block mb-1">Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange} className="w-full border px-3 py-2 rounded">
            <option value="">--Chagua--</option>
            <option value="Male">Mwanaume</option>
            <option value="Female">Mwanamke</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Phone Number</label>
          <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
        </div>

        <div>
          <label className="block mb-1">Position</label>
          <input type="text" name="position" value={formData.position} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block mb-1">Date of Birth</label>
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block mb-1">Date of First Appointment</label>
          <input type="date" name="dateOfFirstAppointment" value={formData.dateOfFirstAppointment} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block mb-1">Current Position Date</label>
          <input type="date" name="currentPositionDate" value={formData.currentPositionDate} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block mb-1">Promotion Date</label>
          <input type="date" name="promotionDate" value={formData.promotionDate} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1">Evaluation Period</label>
          <input type="text" name="evaluationPeriod" value={formData.evaluationPeriod} onChange={handleChange} className="w-full border px-3 py-2 rounded" placeholder="e.g., Jan 2024 - Dec 2024" />
        </div>

        <div className="md:col-span-2 text-center">
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Tuma Fomu</button>
        </div>
      </form>
    </div>
  );
};

export default StaffManager;
