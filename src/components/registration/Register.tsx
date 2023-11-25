// Register.tsx

import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../../redux/reducers/rootReducer';
import axios from 'axios';
import LoadingSpinner from '../loading_spinner/LoadingSpinner';


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
  // firstName: string;
  // lastName: string;
  // email: string;
  // role: string;
  registered: boolean;
  registrationMessage: string;
}



const Register: React.FC<RegistrationProps> = function ({
  registered, registrationMessage
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
  useEffect(() => {

    if (registered) {
      console.log('in useeffect');
      const timer = setTimeout(() => {
        navigate('/registration-complete');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [registered, LoadingSpinner, navigate]);

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
      // Simulate the asynchronous registration process
      // Replace this with your actual registration logic
      setTimeout(async () => {
        // Dispatch the thunk action
        await axios.post('http://localhost:4200/register/sign-up', {
          first_name: formState.firstName,
          last_name: formState.lastName,
          email: formState.email,
          password: formState.password,
          role: formState.role,
        });

        // Dispatch an action with the registration message to the /registration-success component
        registrationMessage = `Thank you for registering, ${formState.firstName}!`;
        registered = true;
       
        dispatch({
          type: 'SUCCESSFUL_REQUEST_MESSAGE',
          payload: {
            successfulRequest : registered,
            successMessage: registrationMessage,
          },
        })

        // Reset the form
        setFormState({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          role: 'Customer',
        });
      }, 500); // Simulated delay

    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <Container>
      <RegistrationContainer>
        <Title>Registration</Title>
        { registered === false ?
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
        </Form> : <LoadingSpinner/>}
        {/* <SuccessMessage>{registrationMessage}</SuccessMessage> */}
      </RegistrationContainer>
    </Container>
  )};
  

function mapStateToProps(state: RootState)  {
  console.log(state.deliveryForm)
  return {
  registered: state.deliveryForm.successfulRequest,
  registrationMessage: state.deliveryForm.successMessage
  };
};


export default connect(mapStateToProps)(Register);
function useSelector(arg0: (state: RootState) => number) {
  throw new Error('Function not implemented.');
}

