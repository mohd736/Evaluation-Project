import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FormAList = () => {
  const [formAList, setFormAList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/form-a')
      .then(res => setFormAList(res.data))
      .catch(err => console.error('Failed to fetch FormA data:', err));
  }, []);

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">Submitted Form A Records</h2>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-[1000px] w-full table-auto bg-white border-collapse">
          <thead className="bg-blue-900 text-white text-xs md:text-sm uppercase">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Full Name</th>
              <th className="p-3">Employee ID</th>
              <th className="p-3">ZSSF No</th>
              <th className="p-3">ZAN ID</th>
              <th className="p-3">Department</th>
              <th className="p-3">Academic Qualification</th>
              <th className="p-3">Gender</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Email</th>
              <th className="p-3">Position</th>
              <th className="p-3">Date of Birth</th>
              <th className="p-3">First Appointment</th>
              <th className="p-3">Current Position</th>
              <th className="p-3">Promotion</th>
              <th className="p-3">Evaluation Period</th>
            </tr>
          </thead>
          <tbody className="text-center text-sm">
            {formAList.length > 0 ? (
              formAList.map((form, index) => (
                <tr key={form.id} className="border-b hover:bg-blue-50">
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{form.fullname}</td>
                  <td className="p-2">{form.employeeIdNumber}</td>
                  <td className="p-2">{form.zssfNumber}</td>
                  <td className="p-2">{form.zanIdNumber}</td>
                  <td className="p-2">{form.department}</td>
                  <td className="p-2">{form.academicQualification}</td>
                  <td className="p-2">{form.gender}</td>
                  <td className="p-2">{form.phoneNo}</td>
                  <td className="p-2">{form.email}</td>
                  <td className="p-2">{form.position}</td>
                  <td className="p-2">{form.dateOfBirth}</td>
                  <td className="p-2">{form.dateOfFirstAppointment}</td>
                  <td className="p-2">{form.currentPositionDate}</td>
                  <td className="p-2">{form.promotionDate}</td>
                  <td className="p-2">{form.evaluationPeriod}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="16" className="py-6 text-gray-500 text-center">No Form A data found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormAList;
