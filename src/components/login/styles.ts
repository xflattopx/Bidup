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

export const LoginFormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  background-color: #333;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
`;

const flicker = keyframes`
  0%, 100% {
    opacity: 0;
  }
  20%, 80% {
    opacity: 0.2;
  }
  40%, 60% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
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
transition: background-color 0.3s; /* Add a smooth transition effect */

&:hover {
  background-color: #ffd700; /* Change the background color to gold on hover */
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
