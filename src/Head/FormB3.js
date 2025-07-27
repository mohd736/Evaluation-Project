import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormB3 = () => {
  const [formData, setFormData] = useState([
    {
      level: 'Uaminifu na uwajibikaji.',
      attribute: 'Anatekeleza majukumu yake kwa uaminifu.\nAnajali kwa makini majukumu aliyoyapewa.',
      staffScore: '',
      evaluatorScore: '',
      agreedScore: '',
      description: '',
    },
    {
      level: 'Ushirikiano na mawasiliano.',
      attribute: 'Ana uwezo wa kushirikiana na wengine.\nAnatoa maoni kwa heshima na uwazi.',
      staffScore: '',
      evaluatorScore: '',
      agreedScore: '',
      description: '',
    },
    {
      level: 'Uzingatiaji wa maadili ya kazi.',
      attribute: 'Anazingatia kanuni na maadili ya taaluma yake.\nHachukui hatua zinazokiuka maadili ya kazi.',
      staffScore: '',
      evaluatorScore: '',
      agreedScore: '',
      description: '',
    },
  ]);

  const [avgAgreedScore, setAvgAgreedScore] = useState(0);
  const [formAId, setFormAId] = useState('');

  useEffect(() => {
    let total = 0;
    let count = 0;

    const updated = formData.map((row) => {
      const staff = parseFloat(row.staffScore) || 0;
      const evaluator = parseFloat(row.evaluatorScore) || 0;
      const agreed = ((staff + evaluator) / 2).toFixed(2);
      total += parseFloat(agreed);
      count++;
      return { ...row, agreedScore: agreed };
    });

    setFormData(updated);
    if (count > 0) setAvgAgreedScore((total / count).toFixed(2));
  }, [formData.map(row => row.staffScore + row.evaluatorScore).join()]);

  const handleChange = (index, field, value) => {
    const updated = [...formData];
    updated[index][field] = value;
    setFormData(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formAId.trim()) {
      alert("Tafadhali weka FormA ID.");
      return;
    }

    try {
      for (const row of formData) {
        const payload = {
          level: row.level,
          attribute: row.attribute,
          staffScore: parseFloat(row.staffScore) || 0,
          evaluatorScore: parseFloat(row.evaluatorScore) || 0,
          agreedScore: parseFloat(row.agreedScore) || 0,
          description: row.description,
          averageScoreB3: avgAgreedScore,
          formA: { id: parseInt(formAId) }
        };

        await axios.post("http://localhost:8080/api/form-b3", payload);
      }

      alert("Data imehifadhiwa vizuri!");
    } catch (error) {
      console.error(error);
      alert("Kuna hitilafu wakati wa kuhifadhi data.");
    }
  };

  return (
    <div className="p-6 bg-white text-black min-h-screen">
      <h2 className="text-2xl font-extrabold mb-6 border-b border-gray-300 pb-2">
        SEHEMU B3 - Vipimo vya Tabia
      </h2>

      <div className="mb-6 max-w-md">
        <label className="block mb-1 font-medium">FormA ID:</label>
        <input
          type="number"
          value={formAId}
          onChange={(e) => setFormAId(e.target.value)}
          className="w-full border p-2 rounded shadow"
          placeholder="Ingiza ID ya FormA hapa"
        />
      </div>

      <form onSubmit={handleSubmit} className="overflow-x-auto">
        <table className="w-full table-auto border border-collapse border-gray-300 mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-2">Ngazi ya Kipimo</th>
              <th className="border px-2 py-2">Sifa ya Kipimo</th>
              <th className="border px-2 py-2">Alama ya Mtumishi</th>
              <th className="border px-2 py-2">Alama ya Tathmini</th>
              <th className="border px-2 py-2">Makubaliano</th>
              <th className="border px-2 py-2">Maelezo</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((row, index) => (
              <tr key={index}>
                <td className="border px-2 py-2">{row.level}</td>
                <td className="border px-2 py-2 whitespace-pre-wrap">{row.attribute}</td>
                <td className="border px-2 py-2">
                  <input
                    type="number"
                    value={row.staffScore}
                    onChange={(e) => handleChange(index, 'staffScore', e.target.value)}
                    className="w-20 p-1 border rounded"
                  />
                </td>
                <td className="border px-2 py-2">
                  <input
                    type="number"
                    value={row.evaluatorScore}
                    onChange={(e) => handleChange(index, 'evaluatorScore', e.target.value)}
                    className="w-20 p-1 border rounded"
                  />
                </td>
                <td className="border px-2 py-2 text-center">{row.agreedScore}</td>
                <td className="border px-2 py-2">
                  <textarea
                    rows={5}
                    value={row.description}
                    onChange={(e) => handleChange(index, 'description', e.target.value)}
                    className="w-full p-2 border rounded"
                  ></textarea>
                </td>
              </tr>
            ))}
            <tr className="bg-gray-200 font-semibold">
              <td colSpan={4} className="border px-2 py-2 text-right">Jumla ya Makubaliano:</td>
              <td className="border px-2 py-2 text-center">{avgAgreedScore}</td>
              <td className="border px-2 py-2"></td>
            </tr>
          </tbody>
        </table>

        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Hifadhi Taarifa
        </button>
      </form>
    </div>
  );
};

export default FormB3;
