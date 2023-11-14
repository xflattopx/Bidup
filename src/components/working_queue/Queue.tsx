// Queue.tsx

import React, { useState, useEffect } from 'react';
import './Queue.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import { Dispatch } from 'redux';
import { setDriverId } from '../../redux/actions/driverActions'

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

const Queue: React.FC = () => {
  const [queueState, setQueueState] = useState<QueueState>({ uniqueIds: new Set(), queue: [] });

  const fetchDataAndEnqueue = async () => {
    try {
      const response = await axios.get('http://localhost:4200/customer_request/pending');
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

  // useEffect to fetch data on component mount
  useEffect(() => {
    fetchDataAndEnqueue();

    // Cleanup function (optional)
    return () => {
      // Cleanup logic (if needed)
    };
  }, []); // Empty dependency array to run once on mount

  // useEffect to trigger fetchDataAndEnqueue every 10 seconds
  useEffect(() => {
    const intervalId = setInterval(fetchDataAndEnqueue, 10000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleBidButtonClick = async (requestId: number) => {
    try {
      // Step 1: Send a bid request to the backend
      const bidResponse = await axios.post('http://localhost:4200/bid/record-bid', {
        deliveryRequestId: requestId,
        driverId: 1,
        bidPrice: 100
      });
  
      // Extract the bid ID from the response
      const bidId = bidResponse.data.requestId;
  
      // Step 2: Update the UI to reflect that the bid was placed
      setQueueState((prevState) => ({
        uniqueIds: prevState.uniqueIds,
        queue: prevState.queue.map((request) =>
          request.id === requestId
            ? { ...request, status: 'Bidding' } // Update status to 'Bidding' or another appropriate value
            : request
        ),
      }));
  
      // Step 3: After a successful bid, record the winning bid
      await axios.post('http://localhost:4200/bid/record-winning-bid', {
        bidId: bidId,
      });
  
  
    } catch (error) {
      console.error('Error placing bid:', error);
    }
  };

  return (
  
    <div className="queue-container">
      <h2>Delivery Queue</h2>
      <table className="delivery-queue-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Pickup Location</th>
            <th>Drop-off Location</th>
            <th>Description</th>
            <th>Preferred Delivery Time</th>
            <th>Price Offer</th>
            <th>Action</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>    
          {queueState.queue.map((request) => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.pickup_location}</td>
              <td>{request.dropoff_location}</td>
              <td>{request.description}</td>
              <td>{request.preferred_delivery_time}</td>
              <td>${request.price_offer}</td>
              <td>{request.status}</td>
              <td>
              {request.status === 'Bidding' && <span>Bidding...</span>}
                {request.status === 'Pending' && (
                  <button onClick={() => handleBidButtonClick(request.id)}>Bid</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  driverId: state.drivers.driverId,
});

export default connect(mapStateToProps)(Queue);
