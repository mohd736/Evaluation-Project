// src/components/RecommendationApprovalForm.js

import React, { useState } from 'react';
import axios from 'axios';

const RecommendationApprovalForm = () => {
  const [formData, setFormData] = useState({
    agreed: '',
    reasonForDisagreement: '',
    newRecommendation: '',
    supervisorName: '',
    supervisorTitle: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      agreed: formData.agreed === 'yes',
      reasonForDisagreement: formData.reasonForDisagreement,
      newRecommendation: formData.newRecommendation,
      supervisorName: formData.supervisorName,
      supervisorTitle: formData.supervisorTitle,
    };

    try {
      await axios.post('http://localhost:8080/api/recommendation-approvals', payload);
      alert('Approval submitted successfully!');
      setFormData({
        agreed: '',
        reasonForDisagreement: '',
        newRecommendation: '',
        supervisorName: '',
        supervisorTitle: '',
      });
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Something went wrong while submitting.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
        Section C: Supervisor's Recommendation
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6 text-gray-800">

        {/* Agreed Yes/No */}
        <div className="flex items-center justify-between">
          <label className="font-semibold text-lg">Do you agree with the previous recommendation?</label>
          <div className="flex space-x-8">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="radio"
                name="agreed"
                value="yes"
                checked={formData.agreed === 'yes'}
                onChange={handleChange}
                className="form-radio h-5 w-5 text-blue-600"
                required
              />
              <span className="ml-2 text-blue-700 font-medium">Yes</span>
            </label>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="radio"
                name="agreed"
                value="no"
                checked={formData.agreed === 'no'}
                onChange={handleChange}
                className="form-radio h-5 w-5 text-red-600"
              />
              <span className="ml-2 text-red-700 font-medium">No</span>
            </label>
          </div>
        </div>

        {/* Reason for Disagreement */}
        <div>
          <label className="block font-semibold mb-2">Reason for Disagreement:</label>
          <textarea
            name="reasonForDisagreement"
            value={formData.reasonForDisagreement}
            onChange={handleChange}
            rows="3"
            placeholder="Explain why you disagree, if applicable"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={formData.agreed !== 'no'}
          />
        </div>

        {/* New Recommendation */}
        <div>
          <label className="block font-semibold mb-2">New Recommendation (if different):</label>
          <textarea
            name="newRecommendation"
            value={formData.newRecommendation}
            onChange={handleChange}
            rows="3"
            placeholder="Provide new recommendation if applicable"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={formData.agreed !== 'no'}
          />
        </div>

        {/* Supervisor Name */}
        <div>
          <label className="block font-semibold mb-2">Supervisor Name:</label>
          <input
            type="text"
            name="supervisorName"
            value={formData.supervisorName}
            onChange={handleChange}
            placeholder="Enter full name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Supervisor Title */}
        <div>
          <label className="block font-semibold mb-2">Supervisor Title:</label>
          <input
            type="text"
            name="supervisorTitle"
            value={formData.supervisorTitle}
            onChange={handleChange}
            placeholder="e.g. Director of School, Head of Department"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-10 rounded-full shadow-md transition duration-300"
          >
            Submit Recommendation
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecommendationApprovalForm;
