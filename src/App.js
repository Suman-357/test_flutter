import React, { useState } from 'react';
import './App.css'

const FloatingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="floating-form-container">
      {!submitted ? (
        <form className="floating-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="tel"
              id="name"
              maxLength={10}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="name">Phone Number</label>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      ) : (
        <div className="submitted-values">
          <h2>Submitted Values:</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  );
};

export default FloatingForm;