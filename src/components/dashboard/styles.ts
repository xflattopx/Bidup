import styled, {keyframes} from 'styled-components';

// Define a common color for the font
const textColor = '#333'; // Darker font color
const cellBackgroundColor = '#f2f2f2'; // Background color for cells

export const DashboardContainer = styled.div`
  text-align: center;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

export const DashboardSection = styled.div`
  margin-top: 20px;
`;

export const DashboardTable = styled.table`
  width: 80%;
  margin: auto;
  border-collapse: collapse;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const DashboardTableHeader = styled.th`
  border: 1px solid #333;
  padding: 12px;
  background-color: #1a1a1a; /* Updated color */
  color: white;
`;

export const DashboardTableCell = styled.td`
border: 1px solid #333;
padding: 12px;
background-color: #1a1a1a; /* Set the desired dark background color */
color: white; /* Set the text color */
`;

export const EvenTableRow = styled.tr`
  background-color: ${cellBackgroundColor}; /* Set background color */
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

export const DashboardTitle = styled.h2`
font-size: 32px;
margin-bottom: 20px;
color: #ffcc00;
animation: ${glow} 2s forwards 
`;
