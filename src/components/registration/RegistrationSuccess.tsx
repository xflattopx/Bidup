// RegistrationSuccess.tsx

import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';

interface RegistrationSuccessProps {
  registrationMessage: string;
}

const RegistrationSuccess: React.FC<RegistrationSuccessProps> = ({ registrationMessage }) => {
  return (
    <div className="registration-success-container">
      <h2>Registration Successful</h2>
      <p>{registrationMessage}</p>
      {/* You can add additional content or redirection logic here */}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  registrationMessage: state.customers.customerInfo.registrationMessage,
});

export default connect(mapStateToProps)(RegistrationSuccess);
