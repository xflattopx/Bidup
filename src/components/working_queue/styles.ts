import styled from 'styled-components';

export const QueueContainer = styled.div`
  text-align: center;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  max-width: 80%;
  margin: 20px auto;
`;

export const DeliveryQueueTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 0 auto; /* Center the table */
  margin-top: 20px; /* Adjust the top margin to move it down a bit */
`;

export const DeliveryQueueTableHeader = styled.th`
  border: 1px solid #333;
  padding: 12px;
  background-color: #333;
  color: white;
`;

export const DeliveryQueueTableCell = styled.td`
  border: 1px solid #333;
  padding: 12px;
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
  background-color: #1a1a1a;
  color: white;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: #333;
  }
`;

export const PendingBidButton = styled(BidButton)`
  /* Additional styles for PendingBidButton if needed */
`;

export const BiddingBidButton = styled(BidButton)`
  /* Additional styles for BiddingBidButton if needed */
`;

export const StatusCell = styled.td`
  /* Additional styles for StatusCell if needed */
`;

export const ActionCell = styled.td`
  /* Additional styles for ActionCell if needed */
`;

export const QueueTitle = styled.h2`
  color: black; /* Set the desired color for the title */
`;