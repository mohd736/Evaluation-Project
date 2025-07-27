import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FormB2 = () => {
  const navigate = useNavigate();

  const [rows, setRows] = useState([
    {
      level: 'Problem-solving and decision-making.',
      attribute: [
        'Able to solve challenges independently.',
        'Makes appropriate decisions timely.',
      ],
      staffScore: '',
      evaluatorScore: '',
      agreedScore: '',
      remarks: '',
    },
    {
      level: 'Ability to work in diverse environments.',
      attribute: [
        'Willing to work in various conditions, extra hours, or rest days.',
      ],
      staffScore: '',
      evaluatorScore: '',
      agreedScore: '',
      remarks: '',
    },
  ]);

  const [average, setAverage] = useState(null);

  useEffect(() => {
    const updated = rows.map(row => {
      const staff = parseFloat(row.staffScore);
      const evaluator = parseFloat(row.evaluatorScore);
      let agreedScore = '';

      if (!isNaN(staff) && !isNaN(evaluator)) {
        agreedScore = ((staff + evaluator) / 2).toFixed(2);
      }

      return { ...row, agreedScore };
    });

    setRows(updated);

    const validScores = updated
      .map(r => parseFloat(r.agreedScore))
      .filter(score => !isNaN(score));

    if (validScores.length > 0) {
      const total = validScores.reduce((a, b) => a + b, 0);
      setAverage((total / validScores.length).toFixed(2));
    } else {
      setAverage(null);
    }
  }, [rows]);

  const handleChange = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
  };

  const handleAttributeChange = (index, value) => {
    const updated = [...rows];
    updated[index].attribute = value.split('\n');
    setRows(updated);
  };

  const addRow = () => {
    setRows([
      ...rows,
      {
        level: '',
        attribute: [''],
        staffScore: '',
        evaluatorScore: '',
        agreedScore: '',
        remarks: '',
      },
    ]);
  };

  const removeRow = (i) => {
    setRows(rows.filter((_, index) => index !== i));
  };

  const submitData = async () => {
    const avg = average;
  
    for (const row of rows.filter(r => r.level.trim() !== '')) {
      const payload = {
        level: row.level,
        attribute: row.attribute.join('\n'),
        staffScore: parseFloat(row.staffScore),
        evaluatorScore: parseFloat(row.evaluatorScore),
        agreedScore: parseFloat(row.agreedScore),
        remarks: row.remarks,
        averageScoreB2: avg, 
      };
      await axios.post('http://localhost:8080/api/form-b2', payload);
    }
  };
  

  const handleSave = async () => {
    try {
      await submitData();
      alert('Data saved successfully.');
    } catch (err) {
      console.error(err);
      alert('Failed to save. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitData();
      navigate('/formb3');
    } catch (err) {
      console.error(err);
      alert('Submission failed. Please check your input.');
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-gray-800">
        SECTION B2 – Competency and Skills Evaluation
      </h2>

      <form onSubmit={handleSubmit}>
        <table className="w-full border border-gray-300 text-sm table-auto">
          <thead className="bg-gray-200 text-center">
            <tr>
              <th className="border p-2 w-10">No.</th>
              <th className="border p-2 w-48">Evaluation Criteria</th>
              <th className="border p-2" style={{ minWidth: '300px' }}>Attributes</th>
              <th className="border p-2 w-28">Staff Score (%)</th>
              <th className="border p-2 w-28">Evaluator Score (%)</th>
              <th className="border p-2 w-28">Agreed Score (%)</th>
              <th className="border p-2 w-40">Remarks</th>
              <th className="border p-2 w-12">Remove</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50`}>
                <td className="border p-2 text-center">{index + 1}</td>
                <td className="border p-2">
                  <textarea
                    rows={3}
                    value={row.level}
                    onChange={(e) => handleChange(index, 'level', e.target.value)}
                    className="w-full border rounded-md p-1"
                  />
                </td>
                <td className="border p-2">
                  <textarea
                    rows={3}
                    value={row.attribute.join('\n')}
                    onChange={(e) => handleAttributeChange(index, e.target.value)}
                    className="w-full border rounded-md p-1"
                  />
                </td>
                <td className="border p-2 text-center">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={row.staffScore}
                    onChange={(e) => handleChange(index, 'staffScore', e.target.value)}
                    className="w-full text-center border rounded-md p-1"
                  />
                </td>
                <td className="border p-2 text-center">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={row.evaluatorScore}
                    onChange={(e) => handleChange(index, 'evaluatorScore', e.target.value)}
                    className="w-full text-center border rounded-md p-1"
                  />
                </td>
                <td className="border p-2 text-center">
                  <input
                    type="text"
                    disabled
                    value={row.agreedScore}
                    className="w-full text-center bg-gray-100 border rounded-md p-1"
                  />
                </td>
                <td className="border p-2">
                  <textarea
                    rows={2}
                    value={row.remarks}
                    onChange={(e) => handleChange(index, 'remarks', e.target.value)}
                    className="w-full border rounded-md p-1"
                  />
                </td>
                <td className="border p-2 text-center">
                  <button
                    type="button"
                    onClick={() => removeRow(index)}
                    className="text-red-600 font-bold"
                  >
                    ×
                  </button>
                </td>
              </tr>
            ))}
            <tr className="bg-yellow-100 font-semibold text-center text-sm">
              <td colSpan={5} className="border p-2 text-left">Total Agreed Average:</td>
              <td className="border p-2 text-blue-800 text-lg font-bold">{average ? `${average} %` : ''}</td>
              <td colSpan={2} className="border p-2"></td>
            </tr>
          </tbody>
        </table>

        <div className="mt-4 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={addRow}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Add Row
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Save
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormB2;
