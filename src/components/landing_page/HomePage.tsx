// HomePage.tsx

import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import Logout from '../login/Logout'; // Import the Logout component
import DeliveryRequestForm from '../delivery_form/DeliveryRequestForm';
import Profile from '../profile/Profile';
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
} from './styles'; // Import the styled components

interface HomePageProps {
  userRole?: string;
}

const HomePage: React.FC<HomePageProps> = ({ userRole }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Container className="home-page-container">
      <PageContent>
        <Navbar className="navbar">
          <HamburgerIcon onClick={toggleMenu}>☰</HamburgerIcon>
          <BidupLabel>Bidup</BidupLabel>
          <NavList className="nav-list">
            {userRole ? (
              // If the user is logged in, display Logout
              <NavItem className="nav-item">
                <Logout />
              </NavItem>
            ) : (
              // If the user is not logged in, display Register and Login
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
          </NavList>
        </Navbar>
        {showMenu && (
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
