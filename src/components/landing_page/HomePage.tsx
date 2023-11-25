// src/components/HomePage.tsx

import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import Logout from '../login/Logout';
import {
  Container,
  PageContent,
  Navbar,
  NavList,
  NavItem,
  NavLink,
  HamburgerIcon,
  BidupLabel,
  CenterContent,
  Dropdown,
  DropdownContent,
  HamburgerMenu,
  MenuItemLink,
} from './styles';

// Import your BidUpLogo.png image
import bidUpLogo from './BidUpLogo.png';

interface HomePageProps {
  userRole?: string;
}

const HomePage: React.FC<HomePageProps> = ({ userRole }) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Add useEffect to check for the presence and validity of the JWT token
  // useEffect(() => {
  //   const token = localStorage.getItem('jwtToken'); // Replace with your actual JWT token key

  //   // Check if the user is not logged in
  //   if (!token || isTokenExpired(token)) {
  //     // Redirect to the login page
  //     navigate('/login');
  //   }
  // }, [navigate]);

  // Helper function to check if a JWT token is expired
  const isTokenExpired = (token: string) => {
    // Implement your logic to check the token expiration here
    // For example, you can use a library like jwt-decode to decode and check the expiration
    // Here's a simplified example assuming the token has an 'exp' claim
    const decodedToken: { exp?: number } = {}; // Decode the token (use your decoding logic)
    return decodedToken.exp ? Date.now() >= decodedToken.exp * 1000 : false;
  };

  return (
    <Container className="home-page-container">
      <PageContent>
        <Navbar className="navbar">
          {userRole && <HamburgerIcon onClick={toggleMenu}>☰</HamburgerIcon>}
          <BidupLabel>
            <img src={bidUpLogo} alt="BidUp Logo" height="30" />
          </BidupLabel>
          {/* <BidupLabel>Bidup</BidupLabel> */}
          <NavList className="nav-list">
            {!userRole && (
              <>
                <NavItem className="nav-item">
                  <NavLink to="/register" className="nav-link">
                    Register
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </NavItem>
              </>
            )}
            {userRole && (
              <NavItem className="nav-item">
                <Logout />
              </NavItem>
            )}
          </NavList>
        </Navbar>
        {showMenu && userRole && (
          <HamburgerMenu show={showMenu}>
            {userRole === 'Driver' && (
              <>
                <MenuItemLink to="/queue" onClick={toggleMenu}>
                  Queue
                </MenuItemLink>
                <MenuItemLink to="/dashboard" onClick={toggleMenu}>
                  Dashboard
                </MenuItemLink>
              </>
            )}

            {userRole === 'Customer' && (
              <>
                <MenuItemLink to="/profile" onClick={toggleMenu}>
                  Profile
                </MenuItemLink>
                <MenuItemLink to="/request-form" onClick={toggleMenu}>
                  Request Form
                </MenuItemLink>
              </>
            )}
          </HamburgerMenu>
        )}

        <CenterContent>
          <Outlet />
        </CenterContent>
      </PageContent>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  userRole: state.users.userInfo.role,
});

export default connect(mapStateToProps)(HomePage);
