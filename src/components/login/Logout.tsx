// Logout.tsx

import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'; // Import styled-components for styling

// Styled Link component
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: 8px 12px;
  border: 1px solid #fff;
  border-radius: 4px;
  margin-right: 16px; // Adjust the margin as needed
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

const Logout: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Dispatch the action to reset user info
    dispatch({
      type: 'RESET_USER_INFO',
    });

    // Clear the token from local storage or perform any other logout-related actions
    localStorage.removeItem('jwtToken');

    // Redirect to the login page
    navigate('/login');
  };

  return <StyledLink to="/login" onClick={handleLogout}>Logout</StyledLink>;
};

export default Logout;
