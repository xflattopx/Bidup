import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './styles';
import { RootState } from 'redux/reducers/rootReducer';
import { useSelector } from 'react-redux';

interface DashboardProps {
  driverId: number;
}

interface Bid {
  delivery_request_id: number;
  pickup_location: string;
  dropoff_location: string;
  description: string;
  price_offer: number;
}

const Dashboard: React.FC<DashboardProps> = ({ driverId }) => {
  const userId = useSelector((state: RootState) => state.users.userId);
  const [acceptedBids, setAcceptedBids] = useState<Bid[]>([]);

  const apiUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4200'
      : 'https://bidup-api-3gltjz2saq-ue.a.run.app';

  useEffect(() => {
    const fetchAcceptedBids = async () => {
      try {
        const response = await axios.get(`${apiUrl}/bid/accepted-bids?userId=${userId}`);
        const data = response.data;

        // Check if the data structure is as expected
        console.log('Data received:', data);

        if (Array.isArray(data) && data.length > 0) {
          // Since data is already an array of objects in the expected format,
          // you can directly set it to acceptedBids
          setAcceptedBids(data);
          console.log('Setting acceptedBids:', data);
        } else {
          console.error('Invalid data structure:', data);
        }
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
  }, [userId, apiUrl]);

  return (
    <S.DashboardContainer>
      <S.ResponsiveDashboardTitle>Driver Dashboard</S.ResponsiveDashboardTitle>

      <S.DashboardSection>
        <S.ResponsiveDashboardTable>
          <thead>
            <tr>
              <S.DashboardTableHeader>Request ID</S.DashboardTableHeader>
              <S.DashboardTableHeader>Pickup Location</S.DashboardTableHeader>
              <S.DashboardTableHeader>Drop-off Location</S.DashboardTableHeader>
              <S.DashboardTableHeader>Description</S.DashboardTableHeader>
              <S.DashboardTableHeader>Price Offer</S.DashboardTableHeader>
            </tr>
          </thead>
          <tbody>
            {acceptedBids.map((bid, index) => (
              <S.EvenTableRow key={bid.delivery_request_id}>
                <S.ResponsiveDashboardTableCell>{bid.delivery_request_id}</S.ResponsiveDashboardTableCell>
                <S.ResponsiveDashboardTableCell>{bid.pickup_location}</S.ResponsiveDashboardTableCell>
                <S.ResponsiveDashboardTableCell>{bid.dropoff_location}</S.ResponsiveDashboardTableCell>
                <S.ResponsiveDashboardTableCell>{bid.description}</S.ResponsiveDashboardTableCell>
                <S.ResponsiveDashboardTableCell>${bid.price_offer}</S.ResponsiveDashboardTableCell>
              </S.EvenTableRow>
            ))}
          </tbody>
        </S.ResponsiveDashboardTable>
      </S.DashboardSection>
    </S.DashboardContainer>
  );
};

export default Dashboard;
