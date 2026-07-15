import React, { useState } from 'react';
import './Register.css'; // Assuming you have a CSS file for styling

function Register() {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    // Here you would typically add your fetch call to the backend
    console.log(userName, firstName, lastName, email, password);
  };

  return (
    <div className="register_container">
      <h2>Sign Up</h2>
      <form onSubmit={register}>
        <input type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)} required />
        <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} required />
        <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} required />
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
export default Register;
