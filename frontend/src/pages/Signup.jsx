// src/components/Signup.js
import React, { useState } from 'react';
import { registerUser } from '../api/auth';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    gender: '',
    nationality: '',
    age: '',
  });

  const handleSignup = async () => {
    try {
      await registerUser(formData);
      alert("Account created successfully. Please log in.");
      window.location.href = "/login";
    } catch (error) {
      console.error("Signup failed", error);
      alert("Unable to create an account. Try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input type="text" name="username" placeholder="Username" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <input type="text" name="gender" placeholder="Gender" onChange={handleChange} />
      <input type="text" name="nationality" placeholder="Nationality" onChange={handleChange} />
      <input type="number" name="age" placeholder="Age" onChange={handleChange} />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default Signup;
