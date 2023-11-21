import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';

interface RequestHistory {
  id: number;
  pickupLocation: string;
  dropoffLocation: string;
  description: string;
  preferredDeliveryTime: string;
  priceOffer: number;
  status: string;
}

interface ProfileProps {
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    // Add more customer profile information as needed
  };
  onCancelRequest: (requestId: number, callback: (success: boolean) => void) => void;
}

const Profile: React.FC<ProfileProps> = ({ customerInfo, onCancelRequest }) => {
  const [requestHistory, setRequestHistory] = useState<RequestHistory[]>([]);
  const [cancelSuccess, setCancelSuccess] = useState<number | null>(null);
  const [customerProfile, setCustomerProfile] = useState<{
    firstName: string;
    lastName: string;
    email: string;
  }>({ firstName: '', lastName: '', email: '' });

  useEffect(() => {
    // Assuming you have access to the customerId in your component
    const customerId = 13; // Implement getCustomerId() based on your component's logic

    // Fetch customer personal details
    axios
      .get(`http://localhost:4200/profile/profile-personal-details?customerId=${customerId}`)
      .then((response) => {
        // Assuming response.data is an object with properties like 'firstName', 'lastName', 'email'
        setCustomerProfile(response.data.data);
        console.log('Customer profile retrieved:', response.data);
      })
      .catch((error) => {
        console.error('Error fetching customer profile:', error);
        // Handle any error-related logic here
      });

    // Fetch request history details
    axios
      .get(`http://localhost:4200/profile/profile-request-details?customerId=${customerId}`)
      .then((response) => {
        // Assuming response.data is an array of objects with properties like 'id', 'pickupLocation', etc.
        setRequestHistory(response.data.data); // Assuming the data is inside a 'data' property
        console.log('Request history retrieved:', response.data);
      })
      .catch((error) => {
        console.error('Error fetching request history:', error);
        // Handle any error-related logic here
      });
  }, []); // Empty dependency array to run the effect once on mount

  const handleCancelRequest = (requestId: number) => {
    console.log('Cancelling request with ID:', requestId);

    // Make an axios call to update the request status on the server
    axios
      .post('http://localhost:4200/profile/cancel-request', { requestId })
      .then((response) => {
        console.log('Cancel request success:', response.data);
        setCancelSuccess(requestId);

        // Optionally, you can update the request history to reflect the cancellation
        setRequestHistory((prevHistory) =>
          prevHistory.map((request) =>
            request.id === requestId ? { ...request, status: 'Cancelled' } : request
          )
        );
      })
      .catch((error) => {
        console.error('Error updating request status:', error);
      });
  };

  return (
    <div className="profile-container">
      <h2>Customer Profile</h2>
      <div className="profile-section">
        <h3>Personal Information</h3>
        <p>
          <strong>First Name:</strong> {customerProfile.firstName || 'Chase'}
        </p>
        <p>
          <strong>Last Name:</strong> {customerProfile.lastName || 'Moore'}
        </p>
        <p>
          <strong>Email:</strong> {customerProfile.email || 'email@email.com'}
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
              <th>Options</th>
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
                  {request.status === 'Pending' && (
                    <>
                      <button onClick={() => handleCancelRequest(request.id)}>Cancel</button>
                      {cancelSuccess !== null && request.id === cancelSuccess && (
                        <span>
                          {cancelSuccess ? 'Request canceled successfully!' : 'Failed to cancel request.'}
                        </span>
                      )}
                    </>
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
