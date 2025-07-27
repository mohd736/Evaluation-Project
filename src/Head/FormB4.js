import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormB4 = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    averageScoreB1: '',
    averageScoreB2: '',
    averageScoreB3: '',
    averageScoreB4: '',
    employeeSignature: '',
  });

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const [b1Res, b2Res, b3Res] = await Promise.all([
          axios.get('http://localhost:8080/api/form-b1/average'),
          axios.get('http://localhost:8080/api/form-b2/average'),
          axios.get('http://localhost:8080/api/form-b3/average'),
        ]);

        const avgB1 = parseFloat(b1Res.data.averageScoreB1) || 0;
        const avgB2 = parseFloat(b2Res.data.averageScoreB2) || 0;
        const avgB3 = parseFloat(b3Res.data.averageScoreB3) || 0;

        const avgB4 = ((avgB1 + avgB2 + avgB3) / 3).toFixed(2);

        setFormData(prev => ({
          ...prev,
          averageScoreB1: avgB1.toFixed(2),
          averageScoreB2: avgB2.toFixed(2),
          averageScoreB3: avgB3.toFixed(2),
          averageScoreB4: avgB4,
        }));
      } catch (error) {
        console.error('Error fetching scores:', error);
        alert('Imeshindikana kufetch alama za wastani kutoka kwa B1, B2, na B3.');
      }
    };

    fetchScores();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.employeeSignature.trim()) {
      alert('Tafadhali weka jina la mtumishi kwa ajili ya saini.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/form-b4', formData);

      if (response.status === 200 || response.status === 201) {
        alert('Form B4 imehifadhiwa kikamilifu.');
        navigate(-1);
      }
    } catch (error) {
      console.error('Error saving Form B4:', error);
      alert('Imeshindikana kuhifadhi. Tafadhali jaribu tena.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md mt-10 text-black">
      <h2 className="text-2xl font-bold mb-6 text-center">SEHEMU B4</h2>

      <p className="mb-4 text-center font-semibold">
        2. Jumla Kuu ya Alama za Viwango vya Upimaji (Ijazwe na Mkuu wa Idara/Kitengo)
      </p>

      <form onSubmit={handleSubmit}>
        <table className="w-full table-auto border mb-6 text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">S/Na</th>
              <th className="border p-2">ALAMA KUU ZA VIWANGO</th>
              <th className="border p-2">ALAMA YA WASTANI</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">1</td>
              <td className="border p-2">Majukumu (B1)</td>
              <td className="border p-2">{formData.averageScoreB1}</td>
            </tr>
            <tr>
              <td className="border p-2">2</td>
              <td className="border p-2">Uwezo na Ustadi (B2)</td>
              <td className="border p-2">{formData.averageScoreB2}</td>
            </tr>
            <tr>
              <td className="border p-2">3</td>
              <td className="border p-2">Tabia (B3)</td>
              <td className="border p-2">{formData.averageScoreB3}</td>
            </tr>
            <tr>
              <td className="border p-2">4</td>
              <td className="border p-2 font-semibold text-black">Alama Kuu ya Wastani (B4)</td>
              <td className="border p-2 font-bold text-green-700">{formData.averageScoreB4}</td>
            </tr>
          </tbody>
        </table>

        <div className="mb-6">
          <label className="block mb-1 font-semibold">
            Saini / Jina la Mtumishi aliyepimwa:
          </label>
          <input
            type="text"
            name="employeeSignature"
            value={formData.employeeSignature}
            onChange={handleChange}
            placeholder="Ingiza jina kamili"
            className="w-full border rounded p-2"
          />
        </div>

        <p className="mt-8 mb-4 font-semibold">
          Mimi .......................................................... Nakubali kwamba ndiye Mtumishi husika aliyepimwa.
        </p>

        <div className="flex justify-between mt-6">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Hifadhi
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition"
          >
            Rudi
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormB4;
