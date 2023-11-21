// styles.ts

import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #f4f4f4;
`;

export const Title = styled.h2`
  font-size: 2em;
  color: #1a1a1a;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #333;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

export const Button = styled.button`
  background-color: #1a1a1a;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  padding: 10px;
`;

export const BackToHomeLink = styled(Link)`
  color: #333;
  text-decoration: none;
  margin-top: 10px; // Adjust as needed
  display: inline-block;
  padding: 8px;
  border: 1px solid #333;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
`;

// Add additional styled components as needed
