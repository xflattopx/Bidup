import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RootState } from '../../redux/reducers/rootReducer';
import * as Styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import * as SharedStyles from '../../form_styles/formStyles'; // Adjust the import path accordingly
import * as ProfileStyles from './styles';

interface RequestHistory {
  id: number;
  pickup_location: string;
  dropoff_location: string;
  description: string;
  preferred_delivery_time: string;
  price_offer: number;
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
  const apiUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:4200'
  : 'https://bidup-api-3gltjz2saq-ue.a.run.app';

  console.log(process.env.REACT_APP_API_URL)
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
      .get(`${apiUrl}/user/?customerId=${customerId}`)

      .then((response) => {
        // Assuming response.data is an object with properties like 'first_name', 'last_name', 'email'
        setCustomerProfile(response.data.customerProfile);
        console.log('Customer profile retrieved:', response.data.customerProfile);
      })
      .catch((error) => {
        console.error('Error fetching customer profile:', error);
        // Handle any error-related logic here
      });

    // Fetch request history details
    axios

      .get(`${apiUrl}/service/request-history?customerId=${customerId}`)
      .then((response) => {
        // Assuming response.data is an array of objects with properties like 'id', 'pickupLocation', etc.
        setRequestHistory(response.data.data); // Assuming the data is inside a 'data' property
        console.log('Request history retrieved:', response.data);
      })
      .catch((error) => {
        console.error('Error fetching request history:', error);
        // Handle any error-related logic here
      });
  }, [customerId]); // Dependency array to run the effect when customerId changes

  const handleCancelRequest = (requestId: number) => {
    console.log('Cancelling request with ID:', requestId);

    // Make an axios call to update the request status on the server
    axios
      .put(`${apiUrl}/service/cancel`, { requestId })
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
    <SharedStyles.Container>
      <SharedStyles.Section>
        <SharedStyles.Title>Customer Profile</SharedStyles.Title>
      </SharedStyles.Section>

      {/* Personal Information */}
      <SharedStyles.Section>
        <SharedStyles.SectionTitle>Personal Information</SharedStyles.SectionTitle>
        <SharedStyles.Table>
          <tbody>
            <tr>
              <SharedStyles.TableHeader>First Name</SharedStyles.TableHeader>
              <SharedStyles.TableCell>{customerProfile.first_name || ''}</SharedStyles.TableCell>
            </tr>
            <tr>
              <SharedStyles.TableHeader>Last Name</SharedStyles.TableHeader>
              <SharedStyles.TableCell>{customerProfile.last_name || ''}</SharedStyles.TableCell>
            </tr>
            <tr>
              <SharedStyles.TableHeader>Email</SharedStyles.TableHeader>
              <SharedStyles.TableCell>{customerProfile.email || ''}</SharedStyles.TableCell>
            </tr>
            {/* Add more customer profile information as needed */}
          </tbody>
        </SharedStyles.Table>
      </SharedStyles.Section>

      {/* Request History */}
      <SharedStyles.Section>
        <SharedStyles.SectionTitle>Request History</SharedStyles.SectionTitle>
        <SharedStyles.Table>
          <thead>
            <tr>
              <SharedStyles.TableHeader>ID</SharedStyles.TableHeader>
              <SharedStyles.TableHeader>Pickup Location</SharedStyles.TableHeader>
              <SharedStyles.TableHeader>Drop-off Location</SharedStyles.TableHeader>
              <SharedStyles.TableHeader>Description</SharedStyles.TableHeader>
              <SharedStyles.TableHeader>Preferred Delivery Time</SharedStyles.TableHeader>
              <SharedStyles.TableHeader>Price Offer</SharedStyles.TableHeader>
              <SharedStyles.TableHeader>Status</SharedStyles.TableHeader>
              <SharedStyles.TableHeader>Options</SharedStyles.TableHeader>
            </tr>
          </thead>
          <tbody>
            {requestHistory.map((request) => (
              <tr key={request.id}>
                <SharedStyles.TableCell>{request.id}</SharedStyles.TableCell>
                <SharedStyles.TableCell>{request.pickup_location}</SharedStyles.TableCell>
                <SharedStyles.TableCell>{request.dropoff_location}</SharedStyles.TableCell>
                <SharedStyles.TableCell>{request.description}</SharedStyles.TableCell>
                <SharedStyles.TableCell>{request.preferred_delivery_time}</SharedStyles.TableCell>
                <SharedStyles.TableCell>${request.price_offer}</SharedStyles.TableCell>
                <SharedStyles.TableCell>{request.status}</SharedStyles.TableCell>
                <SharedStyles.TableCell>
                  {request.status === 'Pending' && (
                    <>
                      <SharedStyles.Button onClick={() => handleCancelRequest(request.id)}>
                        Cancel
                      </SharedStyles.Button>
                      {cancelSuccess !== null && request.id === cancelSuccess && (
                        <SharedStyles.SuccessMessage>
                          {cancelSuccess ? 'Request canceled successfully!' : 'Failed to cancel request.'}
                        </SharedStyles.SuccessMessage>
                      )}
                    </>
                  )}
                </SharedStyles.TableCell>
              </tr>
            ))}
          </tbody>
        </SharedStyles.Table>
      </SharedStyles.Section>

      {/* ... (other components) */}
    </SharedStyles.Container>
  );
};

export default Profile;
