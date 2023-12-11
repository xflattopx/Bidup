import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import EmblaCarouselComponent from '../carousel/EmblaCarousel';  // Update the import path if needed

import {
  QueueContainer,
  DeliveryQueueTable,
  DeliveryQueueTableHeader,
  DeliveryQueueTableCell,
  EvenTableRow,
  HoverTableRow,
  BidButton,
  PendingBidButton,
  BiddingBidButton,
  StatusCell,
  ActionCell,
  BiddingRequestRow,
  QueueTitle,
} from './styles';

interface QueueProps {
  driverId: number;
  setDriverId: (driverId: number) => void;
}

interface DeliveryRequest {
  id: number;
  pickup_location: string;
  dropoff_location: string;
  description: string;
  preferred_delivery_time: string;
  price_offer: number;
  bid_end_time: string;
  status: string;
}

interface QueueState {
  uniqueIds: Set<number>;
  queue: DeliveryRequest[];
}

const Queue: React.FC<QueueProps> = () => {
  const apiUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4200'
      : 'https://bidup-api-3gltjz2saq-ue.a.run.app';
  const userId = useSelector((state: RootState) => state.users.userId);
  const [queueState, setQueueState] = useState<QueueState>({
    uniqueIds: new Set(),
    queue: [],
  });

  const [queue, setQueue] = useState<DeliveryRequest[]>([]);

  const fetchDataAndEnqueue = async () => {
    try {
      const response = await axios.get(`${apiUrl}/customer_request/all`);
      const newData: DeliveryRequest[] = response.data;
      setQueueState((prevState) => {
        const uniqueIdsSet = new Set(prevState.uniqueIds);

        // Filter out existing IDs
        const filteredData = newData.filter((item) => !uniqueIdsSet.has(item.id));

        // Add unique IDs from filteredData to uniqueIdsSet
        filteredData.forEach((item) => uniqueIdsSet.add(item.id));

        return {
          uniqueIds: uniqueIdsSet,
          queue: [...prevState.queue, ...filteredData],
        };
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchDataAndEnqueue();

    // Cleanup function (optional)
    return () => {
      // Cleanup logic (if needed)
    };
  }, []); // Empty dependency array to run once on mount

  useEffect(() => {
    const intervalId = setInterval(fetchDataAndEnqueue, 10000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleBidButtonClick = async (requestId: number) => {
    try {
      // ... (unchanged code)
    } catch (error) {
      console.error('Error placing bid:', error);
      alert('Error placing bid. Please try again later.');
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <QueueContainer>
        <QueueTitle>Delivery Queue</QueueTitle>
        
        {/* {queueState.queue.length > 0 && (
           <EmblaCarouselComponent requests={queueState.queue} />
          // <EmblaCarouselComponent requests={queue} />
        )} */}





        <DeliveryQueueTable>
          <thead>
            <tr>
              <DeliveryQueueTableHeader>ID</DeliveryQueueTableHeader>
              <DeliveryQueueTableHeader>Pickup Location</DeliveryQueueTableHeader>
              <DeliveryQueueTableHeader>Drop-off Location</DeliveryQueueTableHeader>
              <DeliveryQueueTableHeader>Description</DeliveryQueueTableHeader>
              <DeliveryQueueTableHeader>Preferred Delivery Time</DeliveryQueueTableHeader>
              <DeliveryQueueTableHeader>Price Offer</DeliveryQueueTableHeader>
              <DeliveryQueueTableHeader>Action</DeliveryQueueTableHeader>
              <DeliveryQueueTableHeader>Status</DeliveryQueueTableHeader>
            </tr>
          </thead>
          <tbody>
            {queueState.queue.map((request) => (
              <BiddingRequestRow key={request.id} className={queueState.uniqueIds.has(request.id) ? 'new-request' : ''}>
                <DeliveryQueueTableCell>{request.id}</DeliveryQueueTableCell>
                <DeliveryQueueTableCell>{request.pickup_location}</DeliveryQueueTableCell>
                <DeliveryQueueTableCell>{request.dropoff_location}</DeliveryQueueTableCell>
                <DeliveryQueueTableCell>{request.description}</DeliveryQueueTableCell>
                <DeliveryQueueTableCell>{request.preferred_delivery_time}</DeliveryQueueTableCell>
                <DeliveryQueueTableCell>${request.price_offer}</DeliveryQueueTableCell>
                <ActionCell>
                  {request.status === 'Bidding' && (
                    <BiddingBidButton onClick={() => handleBidButtonClick(request.id)}>Bid</BiddingBidButton>
                  )}
                  {request.status === 'Pending' && (
                    <PendingBidButton onClick={() => handleBidButtonClick(request.id)}>Bid</PendingBidButton>
                  )}
                </ActionCell>
                <StatusCell>{request.status}</StatusCell>
              </BiddingRequestRow>
            ))}
          </tbody>
        </DeliveryQueueTable>
      </QueueContainer>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  driverId: state.users.userId,
});

export default connect(mapStateToProps)(Queue);
