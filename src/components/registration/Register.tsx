// Register.tsx

import React, { useState } from 'react';
import { connect } from 'react-redux';
import './Register.css';
import { RootState } from '../../redux/reducers/rootReducer';
import { updateCustomerInfo } from '../../redux/actions/customerActions';

interface RegisterProps {
  // Add any state variables you need here
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  updateCustomerInfo: (info: any) => void;
}

const Register: React.FC<RegisterProps> = ({ firstName, lastName, email, role, updateCustomerInfo }) => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'customer',
  });

  const [passwordError, setPasswordError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));

    // Clear password error when the user types in the password fields
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

    // Perform any other logic you need with the form state
    console.log('Form State:', formState);

    // Update customer information in the Redux store
    updateCustomerInfo({
      firstName: formState.firstName,
      lastName: formState.lastName,
      email: formState.email,
      role: formState.role,
    });
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

const mapStateToProps = (state: RootState) => ({
  // Map any state variables you need from the Redux store
  firstName: state.customers.customerInfo.firstName,
  lastName: state.customers.customerInfo.lastName,
  email: state.customers.customerInfo.email,
  role: state.customers.customerInfo.role,
});

const mapDispatchToProps = {
  updateCustomerInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
