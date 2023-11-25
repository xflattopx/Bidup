// RegistrationSuccess.tsx

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import {
  Container as SuccessContainer,
  Title
} from './styles'; // Adjust the path accordingly
import { useNavigate } from 'react-router-dom';


const RequestSuccessful: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/profile');
    }, 5000);

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

const mapStateToProps = (state: RootState) => ({
  registrationMessage: state.deliveryForm.successMessage
});

export default connect(mapStateToProps)(RequestSuccessful);
