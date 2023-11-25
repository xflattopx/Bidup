import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define a rotation animation for the spinner
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Style the spinner container
const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust the height as needed */
`;

// Style the spinner itself
const Spinner = styled.div`
  border: 6px solid #ccc; /* Border color */
  border-top: 6px solid #1a1a1a; /* Top border color (adjust as needed) */
  border-radius: 50%;
  width: 50px; /* Adjust the size as needed */
  height: 50px; /* Adjust the size as needed */
  animation: ${rotate} 1s linear infinite; /* Apply the rotation animation */
`;


const LoadingSpinner: React.FC = () => {
    return  (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )
    };
export default LoadingSpinner;
