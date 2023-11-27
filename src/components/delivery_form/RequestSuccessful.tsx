// RequestSuccessful.tsx

import React, { useEffect } from 'react';
import {
  Container as SuccessContainer,
  Title
} from './styles'; // Adjust the path accordingly
import { useNavigate } from 'react-router-dom';


const RequestSuccessful: React.FC = () => {
    const apiUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:4200'
    : 'https://bidup-api-3gltjz2saq-ue.a.run.app';
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/profile');
    }, 3000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <SuccessContainer>
      <Title>Request Successfully Submitted</Title>
      <div>Redirecting to profile in 5 seconds...</div>
    </SuccessContainer>
  );
};

export default RequestSuccessful;
