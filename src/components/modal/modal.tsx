import React, { ReactNode } from 'react';
import styled from 'styled-components';

// Define breakpoints for responsiveness
const breakpoints = {
  mobile: 'max-width: 768px', // Adjust this value as needed for your design
};

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: #f7f7f7;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  width: 500px;
  text-align: center;
  @media (${breakpoints.mobile}) {
    width: 70%; // Adjust modal width on mobile
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.25rem;
`;

const CloseButton = styled.span`
  cursor: pointer;
  border: none;
  background: none;
`;

const ModalContent = styled.div`
  margin-bottom: 20px;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  @media (${breakpoints.mobile}) {
    flex-direction: column; // Stack buttons on top of each other on mobile
    align-items: stretch; // Stretch buttons to fill width
  }
`;

interface ButtonProps {
  cancel?: boolean;
}

const Button = styled.button<ButtonProps>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.cancel ? '#ccc' : '#333')};
  color: white;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.cancel ? '#bbb' : '#555')};
  }
  @media (${breakpoints.mobile}) {
    margin-bottom: 10px; // Add space between buttons when stacked
    &:last-child {
      margin-bottom: 0; // Remove margin from the last button
    }
    width: 70%;
    margin: 5px auto;
  }
`;

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode; // Define children to be of type ReactNode
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <Backdrop>
      <ModalContainer>
        <ModalHeader>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        <ModalContent>
          <h2>Sure you want to accept?</h2>
          <p>Are you sure you want to accept this?</p>
        </ModalContent>
        <ModalActions>
          <Button cancel onClick={onClose}>No, cancel</Button>
          <Button onClick={() => alert('Confirmed!')}>Yes, Confirm</Button>
        </ModalActions>
      </ModalContainer>
    </Backdrop>
  );
};

export default Modal;