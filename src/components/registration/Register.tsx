// Register.tsx

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../../redux/reducers/rootReducer';
import {insertCustomerInformationAsync , insertCustomerInformation, updateCustomerInfo } from '../../redux/actions/customerActions';

const Container = styled.div`
  text-align: center;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

const RegistrationContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
  color: #1a1a1a;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  text-align: left;
  color: #333;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #1a1a1a;
  color: white;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  width: 100%;
  &:hover {
    background-color: #333;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 5px;
`;

const SuccessMessage = styled.p`
  color: green;
  margin-top: 5px;
`;

const LabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`;

const InputHalf = styled(Input)`
  width: 48%; /* Adjust the width as needed */
`;

interface RegistrationProps {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  updateCustomerInfo: (info: any) => void;
  insertCustomerInformation: (formData: any) => void;
  insertCustomerInformationAsync: (formData: any) => any;
  isRegistered: boolean;
}

const Register: React.FC<RegistrationProps> = function ({
  firstName, lastName, email, role, updateCustomerInfo, insertCustomerInformation, insertCustomerInformationAsync, isRegistered,
}) {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Customer',
  });

  const [passwordError, setPasswordError] = useState('');
  let navigate = useNavigate();

  useEffect(() => {
    if (isRegistered) {
      const timer = setTimeout(() => {
        navigate('/registration-success');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isRegistered, formState]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));

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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (formState.password !== formState.confirmPassword) {
      setPasswordError("Passwords don't match");
      return;
    }

    try {
      await insertCustomerInformationAsync({
        firstName: formState.firstName,
        lastName: formState.lastName,
        email: formState.email,
        password: formState.password,
        role: formState.role,
      });


      await setFormState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'Customer',
      });
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <Container>
      <RegistrationContainer>
        <Title>Registration</Title>
        <Form onSubmit={handleSubmit}>
          <Label>
            First Name:
            <Input
              type="text"
              name="firstName"
              value={formState.firstName}
              onChange={handleInputChange}
              required />
          </Label>

          <Label>
            Last Name:
            <Input
              type="text"
              name="lastName"
              value={formState.lastName}
              onChange={handleInputChange}
              required />
          </Label>

          <Label>
            Email:
            <Input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
              required />
          </Label>

          <Label>
            Password:
            <Input
              type="password"
              name="password"
              value={formState.password}
              onChange={handleInputChange}
              required />
          </Label>

          <Label>
            Re-enter Password:
            <Input
              type="password"
              name="confirmPassword"
              value={formState.confirmPassword}
              onChange={handleInputChange}
              required />
          </Label>

          {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}

          <Label>
            Role:
            <Select name="role" value={formState.role} onChange={handleRoleChange}>
              <option value="customer">Customer</option>
              <option value="driver">Driver</option>
            </Select>
          </Label>

          <Button type="submit">Register</Button>
        </Form>
        {isRegistered && <SuccessMessage>Registration successful! Redirecting...</SuccessMessage>}
      </RegistrationContainer>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  firstName: state.customers.customerInfo.firstName,
  lastName: state.customers.customerInfo.lastName,
  email: state.customers.customerInfo.email,
  role: state.customers.customerInfo.role,
  isRegistered: state.customers.customerInfo.isRegistered,
});

const mapDispatchToProps = {
  updateCustomerInfo,
  insertCustomerInformation,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
