// src/App.js or any parent component
import React from 'react';
import FormAForm from './staff/FormAForm';

const App = () => {
  const handleFormSubmit = (data) => {
    console.log("Form data submitted:", data);

    // You can send the form data to Spring Boot API like this:
    fetch('http://localhost:8080/api/formA', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => {
      if (!res.ok) throw new Error("Network error");
      return res.json();
    })
    .then(result => {
      console.log("FormA saved:", result);
      alert("Fomu imetumwa kikamilifu!");
    })
    .catch(err => {
      console.error("Error saving formA:", err);
      alert("Tatizo kutuma fomu.");
    });
  };

  return (
    <div>
      <FormAForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
