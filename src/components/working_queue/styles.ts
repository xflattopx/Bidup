import styled, { keyframes } from 'styled-components';

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

export const QueueContainer = styled.div`
  text-align: center;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  max-width: 100%;
  overflow-x: auto; /* Add this line to enable horizontal scrolling */
  margin: 20px auto;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const DeliveryQueueTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px auto 0;

  @media (max-width: 768px) {
    margin: 10px auto 0;
  }
`;

export const DeliveryQueueTableHeader = styled.th`
  border: 1px solid #333;
  padding: 12px;
  background-color: #1a1a1a;
  color: white;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`;

export const DeliveryQueueTableCell = styled.td`
  border: 1px solid #333;
  padding: 12px;
  background-color: #1a1a1a;
  color: white;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`;

export const EvenTableRow = styled.tr`
  background-color: #f2f2f2;
`;

export const HoverTableRow = styled.tr`
  &:hover {
    background-color: #ddd;
  }
`;

export const BidButton = styled.button`
  background-color: white;
  color: #1a1a1a;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: #ffcc00;
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }
`;

export const PendingBidButton = styled(BidButton)`
  /* Additional styles for PendingBidButton if needed */
`;

export const BiddingBidButton = styled(BidButton)`
  background-color: #ffcc00;
  &:hover {
    background-color: #45a049;
  }
`;

export const StatusCell = styled.td`
  background-color: #1a1a1a;
  color: white;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: #333;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ActionCell = styled.td`
  border: 1px solid #333;
  padding: 12px;
  background-color: #1a1a1a;
  color: white;
`;

export const QueueTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  color: #ffcc00;
  animation: ${glow} 2s forwards;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 15px;
  }

  &.scrolled {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    background-color: #fff;
    padding: 10px 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const BiddingRequestRow = styled.tr`
  &.bidding-request {
    background-color: #ffc107;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ff9800;
    }
  }
`;
