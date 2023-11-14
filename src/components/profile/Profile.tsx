// Profile.tsx

import React from 'react';
import './Profile.css';

interface ProfileProps {
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    // Add more customer profile information as needed
  };
  requestHistory: {
    id: number;
    pickupLocation: string;
    dropoffLocation: string;
    description: string;
    preferredDeliveryTime: string;
    priceOffer: number;
    status: string; // Assuming status can be 'pending', 'accepted', etc.
  }[];
  onCancelRequest: (requestId: number) => void;
}

const Profile: React.FC<ProfileProps> = ({ customerInfo, requestHistory, onCancelRequest }) => {
  return (
    <div className="profile-container">
      <h2>Customer Profile</h2>
      <div className="profile-section">
        <h3>Personal Information</h3>
        <p>
          <strong>First Name:</strong> {customerInfo.firstName || 'Chase'}
        </p>
        <p>
          <strong>Last Name:</strong> {customerInfo.lastName || 'Moore'}
        </p>
        <p>
          <strong>Email:</strong> {customerInfo.email || 'email@email.com'}
        </p>
        {/* Add more customer profile information as needed */}
      </div>

      <div className="profile-section">
        <h3>Request History</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Pickup Location</th>
              <th>Drop-off Location</th>
              <th>Description</th>
              <th>Preferred Delivery Time</th>
              <th>Price Offer</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {requestHistory.map((request) => (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td>{request.pickupLocation}</td>
                <td>{request.dropoffLocation}</td>
                <td>{request.description}</td>
                <td>{request.preferredDeliveryTime}</td>
                <td>${request.priceOffer}</td>
                <td>{request.status}</td>
                <td>
                  {request.status === 'pending' && (
                    <button onClick={() => onCancelRequest(request.id)}>Cancel</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
