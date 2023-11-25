import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RootState } from '../../redux/reducers/rootReducer';
import * as Styles from './styles';
import { useSelector, useDispatch } from 'react-redux';

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
  const dispatch = useDispatch();
  const customerId = useSelector((state: RootState) => state.users.userId);
  const role = useSelector((state: RootState) => state.users.userInfo.role);

  const [requestHistory, setRequestHistory] = useState<RequestHistory[]>([]);
  const [cancelSuccess, setCancelSuccess] = useState<number | null>(null);
  const [customerProfile, setCustomerProfile] = useState<{
    first_name: string;
    last_name: string;
    email: string;
  }>({ first_name: '', last_name: '', email: '' });

  useEffect(() => {
    // Assuming you have access to the customerId in your component
    //const customerId = 13; // Implement getCustomerId() based on your component's logic
    console.log(customerId);
    // Fetch customer personal details
    axios
      .get(`http://localhost:4200/profile/profile-personal-details?customerId=${customerId}`)
      .then((response) => {
        // Assuming response.data is an object with properties like 'firstName', 'lastName', 'email'
        setCustomerProfile(response.data.customerProfile);
        console.log('Customer profile retrieved:', response.data.customerProfile);
    
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
    <Styles.ProfileContainer>
      <h2>Customer Profile</h2>
      <Styles.ProfileSection>
        <h3>Personal Information</h3>
        <p>
          <strong>First Name:</strong> {customerProfile.first_name || ''}
        </p>
        <p>
          <strong>Last Name:</strong> {customerProfile.last_name || ''}
        </p>
        <p>
          <strong>Email:</strong> {customerProfile.email || ''}
        </p>
        {/* Add more customer profile information as needed */}
      </Styles.ProfileSection>

      <Styles.ProfileSection>
        <h3>Request History</h3>
        <Styles.ProfileTable>
          <thead>
            <tr>
              <Styles.ProfileTableHeader>ID</Styles.ProfileTableHeader>
              <Styles.ProfileTableHeader>Pickup Location</Styles.ProfileTableHeader>
              <Styles.ProfileTableHeader>Drop-off Location</Styles.ProfileTableHeader>
              <Styles.ProfileTableHeader>Description</Styles.ProfileTableHeader>
              <Styles.ProfileTableHeader>Preferred Delivery Time</Styles.ProfileTableHeader>
              <Styles.ProfileTableHeader>Price Offer</Styles.ProfileTableHeader>
              <Styles.ProfileTableHeader>Status</Styles.ProfileTableHeader>
              <Styles.ProfileTableHeader>Options</Styles.ProfileTableHeader>
            </tr>
          </thead>
          <tbody>
            {requestHistory.map((request) => (
              <tr key={request.id}>
                <Styles.ProfileTableCell>{request.id}</Styles.ProfileTableCell>
                <Styles.ProfileTableCell>{request.pickupLocation}</Styles.ProfileTableCell>
                <Styles.ProfileTableCell>{request.dropoffLocation}</Styles.ProfileTableCell>
                <Styles.ProfileTableCell>{request.description}</Styles.ProfileTableCell>
                <Styles.ProfileTableCell>{request.preferredDeliveryTime}</Styles.ProfileTableCell>
                <Styles.ProfileTableCell>${request.priceOffer}</Styles.ProfileTableCell>
                <Styles.ProfileTableCell>{request.status}</Styles.ProfileTableCell>
                <Styles.ProfileTableCell>
                  {request.status === 'Pending' && (
                    <>
                      <Styles.CancelButton onClick={() => handleCancelRequest(request.id)}>
                        Cancel
                      </Styles.CancelButton>
                      {cancelSuccess !== null && request.id === cancelSuccess && (
                        <Styles.CancelSuccessMessage>
                          {cancelSuccess ? 'Request canceled successfully!' : 'Failed to cancel request.'}
                        </Styles.CancelSuccessMessage>
                      )}
                    </>
                  )}
                </Styles.ProfileTableCell>
              </tr>
            ))}
          </tbody>
        </Styles.ProfileTable>
      </Styles.ProfileSection>
    </Styles.ProfileContainer>
  );
};

export default Profile;
