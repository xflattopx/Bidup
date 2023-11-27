// styles.ts

import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  text-align: center;
  background-color: #333;
  padding: 20px;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
`;

export const RegistrationContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const glow = keyframes`
  0% {
    text-shadow: 0 0 10px #ffcc00;
  }
  50% {
    text-shadow: 0 0 20px #ffcc00;
  }
  100% {
    text-shadow: 0 0 10px #ffcc00;
  }
`;

export const Title = styled.h2`
font-size: 32px;
margin-bottom: 20px;
color: #ffcc00;
animation: ${glow} 2s forwards 
`;



export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  text-align: left;
  color: #333;
  width: 100%;
`;

export const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  width: 80%;
  border: none; /* Set border to none to make it invisible */
  border-radius: 4px;
`;

export const Button = styled.button`
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

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 5px;
`;

export const SignupParagraph = styled.p`
  color: white;
  margin-top: 10px;

  a {
    color: #ffcc00;
    text-decoration: underline;
    margin-left: 5px;
  }
`;

export const SuccessMessage = styled.p`
  color: green;
  margin-top: 5px;
`;

