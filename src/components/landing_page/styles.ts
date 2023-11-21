// styles.ts

import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  text-align: center;
  background-color: #f2f2f2;
  padding: 20px;
  min-height: 100vh;
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto; /* Center the content */
`;

export const Navbar = styled.nav`
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

export const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  margin: 0;
  padding: 0;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 10px;
  &:hover {
    border-bottom: 2px solid #ffcc00;
    background-color: #333; /* Highlight color on hover */
    transition: background-color 0.3s ease;
  }
  transition: color 0.3s ease;
`;

export const HamburgerIcon = styled.div`
  font-size: 1.5em;
  cursor: pointer;
  padding: 10px;
  color: white;
  transition: color 0.3s ease;
`;

export const BidupLabel = styled.div`
  color: #ffcc00;
  font-weight: bold;
  padding: 10px;
  font-size: 1.2em;
  transition: color 0.3s ease;
`;

export const CenterContent = styled.div`
  flex-grow: 2;
  padding: 20px;
  font-size: 1.5em;
  color: #ffcc00;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  transition: background-color 0.3s ease;
  width: 100%; /* Take up the full width of the container */
  margin-top: 100px; /* Adjust this value to lower or raise the CenterContent */
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  transition: left 0.3s ease;
`;

export const DropdownContent = styled.div<{ show: boolean }>`
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

export const HamburgerMenu = styled.div<{ show: boolean }>`
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

export const MenuItemLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px;
  &:hover {
    border-bottom: 1px solid #ffcc00;
    background-color: #333; /* Highlight color on hover */
  }
  transition: color 0.3s ease;
`;
