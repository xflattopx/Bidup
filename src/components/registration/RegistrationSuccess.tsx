// RegistrationSuccess.tsx

import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import LoadingSpinner from '../loading_spinner/LoadingSpinner';
import {
  Container as SuccessContainer,
  Title,
  SuccessMessage,
} from './styles'; // Adjust the path accordingly
import { useNavigate } from 'react-router-dom';

interface RegistrationSuccessProps {
  registrationMessage: string;
}

const RegistrationSuccess: React.FC<RegistrationSuccessProps> = ({ registrationMessage }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'SUCCESSFUL_REQUEST_MESSAGE',
      payload: {
        successfulRequest : false,
        successMessage: '',
      },
    })
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [LoadingSpinner,navigate]);

  return (
    <SuccessContainer>
      <Title>Registration Successful</Title>
      <SuccessMessage>{registrationMessage}</SuccessMessage>
      <div>Redirecting to login in 5 seconds...</div>
    </SuccessContainer>
  );
};

const mapStateToProps = (state: RootState) => ({
  registrationMessage: state.deliveryForm.successMessage
});

export default connect(mapStateToProps)(RegistrationSuccess);
