import React, { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
// Define an interface for the props
interface ProtectedRouteProps {
  component: ComponentType<any>; // Use ComponentType for component props
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component }) => {
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    // Add more logic here if needed to check the validity of the token
    return token != null;
  };

  return isAuthenticated() ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;