// Dashboard.tsx

import React from 'react';
import './Dashboard.css'

interface DashboardProps {
  driverId: number; // Assuming you have a unique identifier for the driver
}

const Dashboard: React.FC<DashboardProps> = ({ driverId }) => {
  // You can fetch driver-specific data from the backend using driverId

  // Placeholder data (replace with actual API calls)
  const currentBids = [
    { requestId: 1, pickupLocation: 'A', dropoffLocation: 'B', priceOffer: 20 },
    { requestId: 2, pickupLocation: 'C', dropoffLocation: 'D', priceOffer: 25 },
  ];

  const acceptedRequests = [
    { requestId: 3, pickupLocation: 'E', dropoffLocation: 'F', priceOffer: 30 },
  ];

  return (
    <div className="dashboard-container">
      <h2>Driver Dashboard</h2>

      <div className="dashboard-section">
        <h3>Current Bids</h3>
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
            {currentBids.map((bid) => (
              <tr key={bid.requestId}>
                <td>{bid.requestId}</td>
                <td>{bid.pickupLocation}</td>
                <td>{bid.dropoffLocation}</td>
                <td>${bid.priceOffer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
            {acceptedRequests.map((request) => (
              <tr key={request.requestId}>
                <td>{request.requestId}</td>
                <td>{request.pickupLocation}</td>
                <td>{request.dropoffLocation}</td>
                <td>${request.priceOffer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add more sections for other relevant information */}
    </div>
  );
};

export default Dashboard;
