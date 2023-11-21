// Dashboard.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './styles';

interface DashboardProps {
  driverId: number;
}

interface Bid {
  delivery_request_id: number;
  pickup_location: string;
  dropoff_location: string;
  price_offer: number;
}

const Dashboard: React.FC<DashboardProps> = ({ driverId }) => {
  const [acceptedBids, setAcceptedBids] = useState<Bid[]>([]);

  useEffect(() => {
    const fetchAcceptedBids = async () => {
      try {
        const response = await axios.get(`http://localhost:4200/dashboard/accepted-bids`);
        setAcceptedBids(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching accepted bids:', error);
      }
    };

    // Fetch accepted bids initially
    fetchAcceptedBids();

    // Set up a timer to fetch accepted bids every 10 seconds
    const timer = setInterval(() => {
      fetchAcceptedBids();
    }, 10000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <S.DashboardContainer>
      <S.DashboardTitle>Driver Dashboard</S.DashboardTitle>

      <S.DashboardSection>
        <h3>Accepted Requests</h3>
        <S.DashboardTable>
          <thead>
            <tr>
              <S.DashboardTableHeader>Request ID</S.DashboardTableHeader>
              <S.DashboardTableHeader>Pickup Location</S.DashboardTableHeader>
              <S.DashboardTableHeader>Drop-off Location</S.DashboardTableHeader>
              <S.DashboardTableHeader>Price Offer</S.DashboardTableHeader>
            </tr>
          </thead>
          <tbody>
            {acceptedBids.map((bid) => (
              <S.EvenTableRow key={bid.delivery_request_id}>
                <S.DashboardTableCell>{bid.delivery_request_id}</S.DashboardTableCell>
                <S.DashboardTableCell>{bid.pickup_location}</S.DashboardTableCell>
                <S.DashboardTableCell>{bid.dropoff_location}</S.DashboardTableCell>
                <S.DashboardTableCell>${bid.price_offer}</S.DashboardTableCell>
              </S.EvenTableRow>
            ))}
          </tbody>
        </S.DashboardTable>
      </S.DashboardSection>
    </S.DashboardContainer>
  );
};

export default Dashboard;
