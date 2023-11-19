import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

interface DashboardProps {
  driverId: number; // Assuming you have a unique identifier for the driver
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
    <div className="dashboard-container">
      <h2>Driver Dashboard</h2>

      <div className="dashboard-section">
        <h3>Accepted Requests</h3>
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Request ID</th>
              <th>Pickup Location</th>
              <th>Drop-off Location</th>
              <th>Price Offer</th>
            </tr>
          </thead>
          <tbody>
            {acceptedBids.map((bid) => (
              <tr key={bid.delivery_request_id}>
                <td>{bid.delivery_request_id}</td>
                <td>{bid.pickup_location}</td>
                <td>{bid.dropoff_location}</td>
                <td>${bid.price_offer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
