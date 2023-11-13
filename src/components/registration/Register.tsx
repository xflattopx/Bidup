// Register.tsx

import React, { useState } from 'react';
import './Register.css'; // Import the CSS file for styling

const Register: React.FC = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'customer', // Default role is set to 'customer'
  });

  const [passwordError, setPasswordError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));

    // Clear password error when user types in the password fields
    if (name === 'password' || name === 'confirmPassword') {
      setPasswordError('');
    }
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      role: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Password validation
    if (formState.password !== formState.confirmPassword) {
      setPasswordError("Passwords don't match");
      return;
    }

    // Add logic to handle form submission
    console.log('Form State:', formState);
    // You can dispatch an action, send a request to the server, etc.
  };

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formState.firstName}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formState.lastName}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Re-enter Password:
          <input
            type="password"
            name="confirmPassword"
            value={formState.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </label>

        {passwordError && <p className="error-message">{passwordError}</p>}

        <label>
          Role:
          <select name="role" value={formState.role} onChange={handleRoleChange}>
            <option value="customer">Customer</option>
            <option value="driver">Driver</option>
          </select>
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
