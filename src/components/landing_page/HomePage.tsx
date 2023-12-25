import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import Logout from '../login/Logout';
import HomePageContent from './HomePageContent';
import DeliveryRequestForm from '../delivery_form/DeliveryRequestForm';
import {
} from './styles';

// Import your BidUpLogo.png image
import bidUpLogo from './BidUpLogo.png';
//import DeliveryRequestForm from 'components/delivery_form/DeliveryRequestForm';

interface HomePageProps {
  userRole?: string;
}

const HomePage: React.FC<HomePageProps> = ({ userRole }) => {
  const apiUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:4200'
    : 'https://bidup-api-3gltjz2saq-ue.a.run.app';
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');

    if (!token || isTokenExpired(token)) {
      // Redirect to the login page
      // navigate('/login');
    }
  }, [navigate]);

  const isTokenExpired = (token: string) => {
    const decodedToken: { exp?: number } = {};
    return decodedToken.exp ? Date.now() >= decodedToken.exp * 1000 : false;
  };

  return (
    <div>
      <div>
        <Link to="/queue">Queue </Link>
        <Link to="/dashboard">Dashboard </Link>
        <Link to="/profile">Profile </Link>
        <Link to="/login">Login </Link>
        <Link to="/request">RequestForm</Link>
        <Link to="/register">Register </Link>
        <Outlet/>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  userRole: state.users.userInfo.role,
});

export default connect(mapStateToProps)(HomePage);
