// Register.tsx

import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../../redux/reducers/rootReducer';
import { insertCustomerInformationAsync, INSERT_CUSTOMER_INFO, REGISTRATION_MESSAGE, updateCustomerInfo } from '../../redux/actions/customerActions';
import axios from 'axios';


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

export const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  width: 100%; /* Make the input span the entire width of the container */
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const InputHalf = styled(Input)`
  padding: 12px;
  margin-top: 8px;
  margin-bottom: 16px;
  width: 95%; /* Adjust the width as needed */
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
`;

interface RegistrationProps {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  isRegistered: boolean;
}



const Register: React.FC<RegistrationProps> = function ({
  firstName, lastName, email, role, isRegistered, 
}) {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Customer',
  });

  const dispatch = useDispatch();
  const [passwordError, setPasswordError] = useState('');
  let navigate = useNavigate();

  // useEffect(() => {

  //   if (isRegistered) {
  //     console.log('in useeffect');
  //     const timer = setTimeout(() => {
  //       navigate('/registration-success');
  //     }, 5000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [isRegistered, formState]);

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

      console.log('hit handleSubmit ');
      // Dispatch the thunk action
      const response = await axios.post('http://localhost:4200/register/sign-up',
       {first_name: formState.firstName, last_name:formState.lastName, email:formState.email, password:formState.password, role:formState.role} ).then(() => {
        dispatch({
          type: INSERT_CUSTOMER_INFO,
          payload: {
            firstName: formState.firstName,
            lastName: formState.lastName,
            email: formState.email,
            password: formState.password,
            role: formState.role,
          }
        });
  
        // Dispatch an action with the registration message to the /registration-success component
        const registrationMessage = `Thank you for registering, ${formState.firstName}!`;
        dispatch({
          type: REGISTRATION_MESSAGE,
          payload: {
            registrationMessage: registrationMessage,
          },
        });
       });

  
      // setFormState({
      //   firstName: '',
      //   lastName: '',
      //   email: '',
      //   password: '',
      //   confirmPassword: '',
      //   role: 'Customer',
      // });
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <Container>
      <RegistrationContainer>
        <Title>Registration</Title>
        <Form onSubmit={handleSubmit}>
          <InputRow>
            <Label>
              First Name:
              <InputHalf
                type="text"
                name="firstName"
                value={formState.firstName}
                onChange={handleInputChange}
                required
              />
            </Label>
  
            <Label>
              Last Name:
              <InputHalf
                type="text"
                name="lastName"
                value={formState.lastName}
                onChange={handleInputChange}
                required
              />
            </Label>
          </InputRow>
  
          <InputRow>
            <Label>
              Email:
              <InputHalf
                type="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                required
              />
            </Label>
          </InputRow>
  
          <InputRow>
            <Label>
              Password:
              <InputHalf
                type="password"
                name="password"
                value={formState.password}
                onChange={handleInputChange}
                required
              />
            </Label>
  
            <Label>
              Re-enter Password:
              <InputHalf
                type="password"
                name="confirmPassword"
                value={formState.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </Label>
          </InputRow>
  
          {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
  
          <InputRow>
            <Label>
              Role:
              <Select name="role" value={formState.role} onChange={handleRoleChange}>
                <option value="Customer">Customer</option>
                <option value="Driver">Driver</option>
              </Select>
            </Label>
          </InputRow>
  
          <Button type="submit">Register</Button>
        </Form>
        {isRegistered === true && <SuccessMessage>{REGISTRATION_MESSAGE}</SuccessMessage>}
      </RegistrationContainer>
    </Container>
  )};
  

const mapStateToProps = (state: RootState) => ({
  firstName: state.customers.customerInfo.firstName,
  lastName: state.customers.customerInfo.lastName,
  email: state.customers.customerInfo.email,
  role: state.customers.customerInfo.role,
  isRegistered: state.customers.customerInfo.isRegistered,
  registrationMessage: state.customers.customerInfo.registrationMessage
});

const mapDispatchToProps = {
  updateCustomerInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
