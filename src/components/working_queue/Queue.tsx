import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import Swiper from '../carousel/Swiper';
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
  QueueCard
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
      // Prompt the user for bid amount
      const bidAmount = prompt('Enter your bid amount:');
      if (bidAmount !== null) {
        const parsedBidAmount = parseFloat(bidAmount);
        if (!isNaN(parsedBidAmount)) {
          // Check if the bid amount is less than the current price offer
          const currentRequest = queueState.queue.find((request) => request.id === requestId);
          if (currentRequest && parsedBidAmount > currentRequest.price_offer) {
            alert('Bid amount must be Less than the current price offer.');
            return;
          }

          // Send a bid request to the backend
          const bidResponse = await axios.post(`${apiUrl}/bid/record-bid`, {
            deliveryRequestId: requestId,
            driverId: userId, // Replace with your driverId logic
            bidPrice: parsedBidAmount,
          });

          // Extract the bid ID from the response
          const bidId = bidResponse.data.requestId;

          // Update the bid with the driver who placed it
          await axios.post(`${apiUrl}/bid/update-bid`, {
            bidId: bidId,
            newBidPrice: parsedBidAmount,
            driverId: userId, // Replace with your driverId logic
          });

          // Update the UI to reflect that the bid was placed
          setQueueState((prevState) => ({
            uniqueIds: prevState.uniqueIds,
            queue: prevState.queue.map((request) =>
              request.id === requestId
                ? { ...request, status: 'Bidding', price_offer: parsedBidAmount }
                : request
            ),
          }));

          // Record the winning bid
          await axios.post(`${apiUrl}/bid/record-winning-bid`, {
            bidId: bidId,
          });
        } else {
          alert('Invalid bid amount. Please enter a valid number.');
        }
      }
    } catch (error) {
      console.error('Error placing bid:', error);
      alert('Error placing bid. Please try again later.');
    }
  };

  const onBidClick = (id: number) => {
    // Implement the logic you want when a bid button is clicked
    console.log(`Bid button clicked for item with ID ${id}`);
    handleBidButtonClick(id);
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

  
        <QueueCard>
          <Swiper items={queueState.queue.map(request => ({
            id: request.id,
            pickup_location: request.pickup_location,
            dropoff_location: request.dropoff_location,
            description: request.description,
            preferred_delivery_time: request.preferred_delivery_time,
            price_offer: request.price_offer,
            status: request.status,
          }))} onBidClick={onBidClick}  />
        </QueueCard>




        {/* <DeliveryQueueTable>
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
        </DeliveryQueueTable> */}


      </QueueContainer>


    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  driverId: state.users.userId,
});

export default connect(mapStateToProps)(Queue);
