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

  const apiUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:4200'
    : 'https://bidup-api-3gltjz2saq-ue.a.run.app';

  useEffect(() => {
    const fetchAcceptedBids = async () => {
      try {
        const response = await axios.get(`${apiUrl}/dashboard/accepted-bids?userId=${userId}`);
        const data = response.data;

        // Check if the data structure is as expected
        console.log('Data received:', data);

        // Assuming data[0].rows is an array of objects
        if (Array.isArray(data) && data.length > 0 && data[0].rows) {
          // Iterate through every index and store the data in acceptedBids
          const bidsData = data[0].rows.map((row: any) => ({
            delivery_request_id: row.delivery_request_id,
            pickup_location: row.pickup_location,
            dropoff_location: row.dropoff_location,
            description: row.description,
            price_offer: row.price_offer,
          }));

          // Set acceptedBids with the mapped data
          setAcceptedBids(bidsData);

          console.log('Setting acceptedBids:', bidsData);
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
      <S.DashboardTitle>Driver Dashboard</S.DashboardTitle>

      <S.DashboardSection>
        <S.DashboardTable>
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
            {acceptedBids.map((bid) => (
              <S.EvenTableRow key={bid.delivery_request_id}>
                <S.DashboardTableCell>{bid.delivery_request_id}</S.DashboardTableCell>
                <S.DashboardTableCell>{bid.pickup_location}</S.DashboardTableCell>
                <S.DashboardTableCell>{bid.dropoff_location}</S.DashboardTableCell>
                <S.DashboardTableCell>{bid.description}</S.DashboardTableCell>
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
