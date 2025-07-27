// src/components/FormB1.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FormB1 = () => {
  const navigate = useNavigate();

  const createInitialRow = () => ({
    majukumu: '',
    viashiria: '',
    shabaha: '',
    utekelezajiHalisi: '',
    mtumishi: '',
    mpimaji: '',
    makubaliano: '',
    maelezo: '',
  });

  const [rows, setRows] = useState([
    createInitialRow(),
    createInitialRow(),
    createInitialRow(),
    createInitialRow(),
    createInitialRow(),
  ]);

  const [formAId, setFormAId] = useState('');

  useEffect(() => {
    const updatedRows = rows.map(row => {
      const staff = parseFloat(row.mtumishi);
      const evaluator = parseFloat(row.mpimaji);
      if (!isNaN(staff) && !isNaN(evaluator)) {
        return {
          ...row,
          makubaliano: ((staff + evaluator) / 2).toFixed(2),
        };
      }
      return row;
    });
    setRows(updatedRows);
  }, [rows.map(row => `${row.mtumishi}-${row.mpimaji}`).join('|')]);

  const handleChange = (index, field, value) => {
    const updated = [...rows];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };
    setRows(updated);
  };

  const average = () => {
    const total = rows.reduce((sum, row) => sum + (parseFloat(row.makubaliano) || 0), 0);
    return rows.length ? (total / rows.length).toFixed(2) : '0.00';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formAId.trim()) {
      alert('Tafadhali ingiza FormA ID.');
      return;
    }

    try {
      const filteredRows = rows.filter(row =>
        Object.values(row).some(value => value.trim() !== '')
      );

      if (filteredRows.length === 0) {
        alert("Tafadhali jaza angalau taarifa moja kabla ya kuhifadhi.");
        return;
      }

      const avgScore = average();

      for (const row of filteredRows) {
        const payload = {
          dutyPerformed: row.majukumu,
          performanceIndicator: row.viashiria,
          target: row.shabaha,
          actualPerformance: row.utekelezajiHalisi,
          performerScore: parseFloat(row.mtumishi) || 0,
          evaluatorScore: parseFloat(row.mpimaji) || 0,
          agrimentScore: parseFloat(row.makubaliano) || 0,
          performanceDescription: row.maelezo,
          b1score: parseFloat(row.makubaliano) || 0,
          averageScoreB1: avgScore,
          formA: { id: parseInt(formAId) },
        };

        await axios.post('http://localhost:8080/api/form-b1', payload);
      }

      alert('Taarifa zimehifadhiwa kwa mafanikio.');
      navigate('/form-b2');
    } catch (error) {
      console.error('Hitilafu wakati wa kuhifadhi:', error);
      alert('Imeshindikana kuhifadhi taarifa. Tafadhali jaribu tena.');
    }
  };

  return (
    <div className="p-6 bg-gray-50 text-black min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center">SEHEMU B1 - Utekelezaji wa Majukumu ya Mtumishi</h2>

      <div className="mb-6 max-w-md mx-auto">
        <label className="block mb-2 font-semibold">FormA ID (Ingiza nambari ya FormA):</label>
        <input
          type="number"
          value={formAId}
          onChange={(e) => setFormAId(e.target.value)}
          className="border p-3 w-full rounded shadow"
          placeholder="Mfano: 1"
        />
      </div>

      <form onSubmit={handleSubmit} className="overflow-x-auto">
        <table className="w-full border border-gray-400 text-sm">
          <thead className="bg-blue-100">
            <tr>
              <th className="border p-3">S/N</th>
              <th className="border p-3">Duty Performed</th>
              <th className="border p-3">Performance Indicator</th>
              <th className="border p-3">Target</th>
              <th className="border p-3">Actual Performance</th>
              <th className="border p-3">Staff Score (%)</th>
              <th className="border p-3">Evaluator Score (%)</th>
              <th className="border p-3">Agreed Score (%)</th>
              <th className="border p-3">Performance Description</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="bg-white even:bg-gray-50">
                <td className="border text-center p-2 align-top">{i + 1}</td>
                <td className="border p-2"><textarea rows={5} value={row.majukumu} onChange={(e) => handleChange(i, 'majukumu', e.target.value)} className="w-full border rounded p-2" /></td>
                <td className="border p-2"><textarea rows={5} value={row.viashiria} onChange={(e) => handleChange(i, 'viashiria', e.target.value)} className="w-full border rounded p-2" /></td>
                <td className="border p-2"><input type="text" value={row.shabaha} onChange={(e) => handleChange(i, 'shabaha', e.target.value)} className="w-full border rounded p-2" /></td>
                <td className="border p-2"><input type="text" value={row.utekelezajiHalisi} onChange={(e) => handleChange(i, 'utekelezajiHalisi', e.target.value)} className="w-full border rounded p-2" /></td>
                <td className="border p-2"><input type="number" value={row.mtumishi} onChange={(e) => handleChange(i, 'mtumishi', e.target.value)} className="w-full border rounded p-2" /></td>
                <td className="border p-2"><input type="number" value={row.mpimaji} onChange={(e) => handleChange(i, 'mpimaji', e.target.value)} className="w-full border rounded p-2" /></td>
                <td className="border p-2"><input type="number" value={row.makubaliano} readOnly className="w-full bg-gray-100 text-center border rounded p-2" /></td>
                <td className="border p-2"><textarea rows={5} value={row.maelezo} onChange={(e) => handleChange(i, 'maelezo', e.target.value)} className="w-full border rounded p-2" /></td>
              </tr>
            ))}
            <tr className="bg-yellow-100 font-bold text-center">
              <td colSpan="7" className="border p-3 text-right">JUMLA YA ALAMA YA WASTANI</td>
              <td className="border p-3">{average()}</td>
              <td className="border p-3">%</td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-between mt-8">
          <button type="submit" className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700">
            Hifadhi Taarifa
          </button>

          <button type="button" onClick={() => navigate('/form-b2')} className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
            Nenda Kwenye Fomu Inayofuata
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormB1;
