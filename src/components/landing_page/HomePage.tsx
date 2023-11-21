// HomePage.tsx

import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
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
            {userRole === 'Driver' && (
              <NavItem className="nav-item dropdown">
                <Dropdown>
                  <DropdownContent className="dropdown-content" show={showMenu}>
                    <NavLink to="/queue" className="nav-link">
                      View Queue
                    </NavLink>
                    <NavLink to="/dashboard" className="nav-link">
                      Driver Dashboard
                    </NavLink>
                    <NavLink to="/profile" className="nav-link">
                      Profile
                    </NavLink>
                    <NavLink to="/request-form" className="nav-link">
                      Request Form
                    </NavLink>
                  </DropdownContent>
                </Dropdown>
              </NavItem>
            )}
          </NavList>
        </Navbar>

        {showMenu && (
          <HamburgerMenu show={showMenu}>
            <MenuItemLink to="/queue" onClick={toggleMenu}>
              Queue
            </MenuItemLink>
            <MenuItemLink to="/delivery-request-form" onClick={toggleMenu}>
              Request Form
            </MenuItemLink>
            <MenuItemLink to="/dashboard" onClick={toggleMenu}>
              Dashboard
            </MenuItemLink>
            <MenuItemLink to="/profile" onClick={toggleMenu}>
              Profile
            </MenuItemLink>
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
  userRoleCustomer: state.customers.customerInfo.role,
});

export default connect(mapStateToProps)(HomePage);
