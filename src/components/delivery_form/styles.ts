// styles.ts

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;



export const LogoContainer = styled.div`
  margin-bottom: 40px; /* Adjust the margin to leave more space at the bottom */
`;

export const LogoImage = styled.img`
  max-width: 100%;
  max-height: 150px; /* Increase the max-height value */
  height: auto;
`;

export const Title = styled.h2`
  font-size: 2.5em;
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

export const TextArea = styled.textarea`
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
  width: 80%;
  &:hover {
    background-color: #333;
  }
`;

export const BackToHomeLink = styled(Link)`
  color: #1a1a1a;
  margin-top: 20px;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
