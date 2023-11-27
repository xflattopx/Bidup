import styled from 'styled-components';

// Define a common color for the font
const textColor = '#333'; // Darker font color

export const ProfileContainer = styled.div`
  max-width: 1400px; /* Adjusted width for a bit wider profile container */
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: ${textColor}; // Set font color
`;

export const ProfileSection = styled.div`
  margin-top: 20px;
`;

export const ProfileSectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: ${textColor}; // Set font color
`;

export const ProfileTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

export const ProfileTableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
  background-color: #f2f2f2;
  color: ${textColor}; // Set font color
`;

export const ProfileTableCell = styled.td`
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
  color: ${textColor}; // Set font color
`;

export const CancelButton = styled.button<{ success?: boolean }>`
  background-color: ${props => (props.success ? 'green' : '#4caf50')};
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.success ? 'green' : '#45a049')};
  }
`;

export const CancelSuccessMessage = styled.span<{ success?: boolean }>`
  color: ${props => (props.success ? 'green' : 'red')};
`;

/* Add more styles as needed */
