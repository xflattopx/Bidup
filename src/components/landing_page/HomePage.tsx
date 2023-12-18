import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import Logout from '../login/Logout';
import HomePageContent from './HomePageContent';
import DeliveryRequestForm from '../delivery_form/DeliveryRequestForm';
import {
  Container,
  NestedContainer,
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
  Description,
  Title,
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
    <Container className="home-page-container">
      <PageContent className="page-content">
        <Navbar className="navbar">
          {userRole && <HamburgerIcon onClick={toggleMenu}>☰</HamburgerIcon>}
          <BidupLabel>
            <Link to="/">
              <img src={bidUpLogo} alt="BidUp Logo" height="30" />
            </Link>
          </BidupLabel>
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
   
          {location.pathname === '/' && <HomePageContent />}
          {location.pathname !== '/' && <Outlet />} 
        
        </CenterContent>
      </PageContent>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  userRole: state.users.userInfo.role,
});

export default connect(mapStateToProps)(HomePage);
