// styles.ts

import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';

// Define breakpoints
const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

export const Container = styled.div`
  text-align: center;
  background-color: #333; /* Dark background color */
  padding: 20px;
  min-height: 100vh;
  overflow: auto;
`;

// export const PageContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   max-width: 800px;
//   margin: 0 auto; /* Center the content */
// `;

export const Navbar = styled.nav`
  background-color: rgba(26, 26, 26, 0.9); /* Semi-transparent black background */
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 2;
  transition: background-color 0.3s ease;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 10px; /* Adjust padding for mobile */
  }
`;

export const NestedContainer = styled.div`
  max-width: 1200px; /* Adjust the maximum width as needed */
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px;
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    background-color: #1a1a1a; /* Dark background color on hover */
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
  padding: 80px 20px 20px; /* Adjusted top padding to accommodate the Navbar */
  font-size: 1.5em;
  color: #ffcc00;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  transition: background-color 0.3s ease;
  width: 100%;
  margin-top: 60px; /* Adjusted to accommodate the Navbar */
  overflow: auto; /* Add overflow property to handle overflow */
@media (max-width: ${breakpoints.desktop}) {
  flex-grow: 2;
  padding: 80px 20px 20px; /* Adjusted top padding to accommodate the Navbar */
  font-size: 1.5em;
  color: #ffcc00;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  transition: background-color 0.3s ease;
  width: 100%;
  margin-top: 60px; /* Adjusted to accommodate the Navbar */
  overflow: auto; /* Add overflow property to handle overflow */
}

  @media (max-width: ${breakpoints.tablet}) {
    flex-grow: 2;
    padding: 80px 20px 20px; /* Adjusted top padding to accommodate the Navbar */
    font-size: 1.5em;
    color: #ffcc00;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    transition: background-color 0.3s ease;
    width: 100%;
    margin-top: 60px; /* Adjusted to accommodate the Navbar */
    overflow: auto; /* Add overflow property to handle overflow */
    padding: 60px 10px 20px; /* Adjust padding for tablets */
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-grow: 2;
    padding: 80px 20px 20px; /* Adjusted top padding to accommodate the Navbar */
    font-size: 1.5em;
    color: #ffcc00;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    transition: background-color 0.3s ease;
    width: 100%;
    margin-top: 60px; /* Adjusted to accommodate the Navbar */
    overflow: auto; /* Add overflow property to handle overflow */
    padding: 40px 10px 20px; /* Adjust padding for mobile */
    align-items: left;
  }
`;



export const Dropdown = styled.div`
  position: fixed;
  top: 80px; /* Adjusted to provide more space */
  left: 0;
  transition: left 0.3s ease;
`;

export const HamburgerMenu = styled.div<{ show: boolean }>`
  display: ${props => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 80px; /* Adjusted to provide more space */
  left: 0;
  background-color: #1a1a1a;
  z-index: 1;
  padding: 10px;
  border-radius: 4px;
  transition: display 0.3s ease;
`;

export const DropdownContent = styled.div<{ show: boolean }>`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  background-color: #1a1a1a;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 10px;
  min-width: 150px;
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

export const Cursor = styled.span`
  color: #ffcc00; /* Cursor color */
  animation: blink 0.8s infinite;

  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`;

export const ContentContainer = styled.div`
  text-align: left;
  padding: 20px;
  font-family: monospace; /* Change the font-family to monospace for a command line style */
`;

const pulsate = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const Description = styled.p`
  color: white;
  font-size: 16px;
  line-height: 1.5;
  white-space: pre-wrap;
`;

const flicker = keyframes`
  0%, 100% {
    opacity: 0;
  }
  20%, 80% {
    opacity: 0.2;
  }
  40%, 60% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const glow = keyframes`
  0% {
    text-shadow: 0 0 10px #ffcc00;
  }
  50% {
    text-shadow: 0 0 20px #ffcc00;
  }
  100% {
    text-shadow: 0 0 10px #ffcc00;
  }
`;

export const Title = styled.h1<{ isTyping: boolean }>`
  color: #ffcc00;
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
  animation: ${({ isTyping }) =>
    isTyping ? css`${flicker} 2s forwards, ${glow} 2s infinite alternate` : 'none'};
`;

/* New styling */
