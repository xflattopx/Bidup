// HomePage.tsx

import React, { useState } from 'react';
import styled from 'styled-components';
import { Outlet, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import DeliveryRequestForm from '../delivery_form/DeliveryRequestForm'; // Import the DeliveryRequestForm component

interface HomePageProps {
  userRole?: string;
}

const Container = styled.div`
  text-align: center;
  background-color: #f2f2f2;
  padding: 20px;
  min-height: 100vh;
`;

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto; /* Center the content */
`;

const Navbar = styled.nav`
  background-color: #1a1a1a;
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 2;
  transition: background-color 0.3s ease;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

const NavItem = styled.li`
  margin: 0;
  padding: 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 10px;
  &:hover {
    border-bottom: 2px solid #ffcc00;
    background-color: #333;
    transition: background-color 0.3s ease;
  }
  transition: color 0.3s ease;
`;

const HamburgerIcon = styled.div`
  font-size: 1.5em;
  cursor: pointer;
  padding: 10px;
  color: white;
  transition: color 0.3s ease;
`;

const BidupLabel = styled.div`
  color: #ffcc00;
  font-weight: bold;
  padding: 10px;
  font-size: 1.2em;
  transition: color 0.3s ease;
`;

const CenterContent = styled.div`
  flex-grow: 2;
  padding: 20px;
  font-size: 1.5em;
  color: #ffcc00;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  transition: background-color 0.3s ease;
  background-color: #fff;
  border: 1px solid #1a1a1a;
  border-radius: 8px;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  transition: left 0.3s ease;
`;

const DropdownContent = styled.div<{ show: boolean }>`
  display: ${props => (props.show ? 'block' : 'none')};
  position: absolute;
  background-color: #1a1a1a;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 10px;
  min-width: 150px;
  border-radius: 4px;
  transition: display 0.3s ease;
`;

const HamburgerMenu = styled.div<{ show: boolean }>`
  display: ${props => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 60px;
  left: 0;
  background-color: #1a1a1a;
  z-index: 1;
  padding: 10px;
  border-radius: 4px;
  transition: display 0.3s ease;
`;

const MenuItem = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px;
  &:hover {
    border-bottom: 1px solid #ffcc00;
  }
  transition: color 0.3s ease;
`;

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
            <MenuItem to="/queue" onClick={toggleMenu}>
              Queue
            </MenuItem>
            <MenuItem to="/dashboard" onClick={toggleMenu}>
              Dashboard
            </MenuItem>
            <MenuItem to="/profile" onClick={toggleMenu}>
              Profile
            </MenuItem>
            <MenuItem to="/request-form" onClick={toggleMenu}>
              Request Form
            </MenuItem>
          </HamburgerMenu>
        )}

        <CenterContent>
          
        </CenterContent>
      </PageContent>
      <Outlet />
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  userRoleCustomer: state.customers.customerInfo.role,
});

export default connect(mapStateToProps)(HomePage);
