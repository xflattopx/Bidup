import styled, { keyframes } from 'styled-components';

const textColor = '#333';
const cellBackgroundColor = '#f2f2f2';

export const DashboardContainer = styled.div`
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

export const DashboardSection = styled.div`
  margin-top: 20px;
`;

export const DashboardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const DashboardTableHeader = styled.th`
  border: 1px solid ${textColor};
  padding: 12px;
  background-color: #1a1a1a;
  color: white;
`;

export const DashboardTableCell = styled.td`
  border: 1px solid ${textColor};
  padding: 12px;
  background-color: #1a1a1a;
  color: white;
`;

export const EvenTableRow = styled.tr`
  background-color: ${cellBackgroundColor};
`;

const glow = keyframes`
  0% {
    text-shadow: 0 0 5px #ffcc00;
  }
  50% {
    text-shadow: 0 0 10px #ffcc00;
  }
  100% {
    text-shadow: 0 0 5px #ffcc00;
  }
`;

export const DashboardTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #ffcc00;
  animation: ${glow} 2s forwards;
`;

// Media query for responsiveness
export const ResponsiveDashboardTable = styled(DashboardTable)`
  @media (min-width: 768px) {
    width: 80%;
    margin: auto;
  }
`;

export const ResponsiveDashboardTitle = styled(DashboardTitle)`
  @media (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 20px;
  }
`;

export const ResponsiveDashboardTableCell = styled(DashboardTableCell)`
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

// Add more responsive styles as needed
