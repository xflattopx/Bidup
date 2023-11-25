// styles.ts

import styled from 'styled-components';

// Define a common color for the font
const textColor = '#333'; // Darker font color

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
  color: ${textColor}; /* Set font color */
  background-color: #f2f2f2; /* Same color as EvenTableRow */
`;

export const EvenTableRow = styled.tr`
  background-color: #f2f2f2;
`;

export const DashboardTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
  color: #1a1a1a;
`;
