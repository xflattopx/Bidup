// styles.ts

import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

export const SuccessContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
  color: #1a1a1a;
`;

export const SuccessMessage = styled.p`
  color: green;
  margin-top: 5px;
`;
