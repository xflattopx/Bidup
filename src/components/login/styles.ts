// styles.ts

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Set the height to 100% of the viewport height */
`;

export const LoginFormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center; /* Center the content horizontally */
`;

export const Title = styled.h2`
  font-size: 2.5em; /* Increase the font size for the title */
  margin-bottom: 20px;
  color: #1a1a1a;
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
  border: 1px solid #ccc;
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
