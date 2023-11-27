import styled from 'styled-components';

const textColor = '#ffd700'; // Darker font color
const textColorDark = '#333'; // Darker font color
const lighterTextColor = '#666'; // Lighter font color for the profile section
const tableHeaderColor = '#000'; // Color for table headers

export const Container = styled.div`
  max-width: 1400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Added a subtle shadow */
  color: ${textColor};
`;

export const Section = styled.div`
  margin-top: 20px;
`;

export const SectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: ${textColor};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

export const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
  background-color: #f2f2f2;
  color: ${tableHeaderColor};
`;

export const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
  color: ${textColor};
`;

export const Button = styled.button<{ success?: boolean }>`
  background-color: ${props => (props.success ? '#4caf50' : '#ffd700')}; /* Adjusted button colors */
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Added a smooth transition on hover */

  &:hover {
    background-color: ${props => (props.success ? '#45a049' : '#ccaa00')}; /* Adjusted hover colors */
  }
`;

export const SuccessMessage = styled.span<{ success?: boolean }>`
  color: ${props => (props.success ? '#4caf50' : 'red')}; /* Adjusted success message color */
`;

export const FormContainer = styled.div`
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Added a subtle shadow */
  color: ${textColor};
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 8px;
  color: ${textColor};
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Added a smooth transition on hover */

  &:hover {
    background-color: #45a049;
  }
`;

export const FormSuccessMessage = styled.span`
  color: #4caf50; /* Adjusted success message color */
`;

export const FormErrorMessage = styled.span`
  color: red;
`;

/* Add more styles as needed */
