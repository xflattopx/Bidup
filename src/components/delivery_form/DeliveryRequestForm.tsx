// src/components/DeliveryRequestForm.tsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitDeliveryRequest } from '../../redux/actions/deliveryRequestActions';
import { Link, Outlet, redirect } from 'react-router-dom'; // Import Link and useHistory
import * as Styled from './styles';

// Component
const DeliveryRequestForm: React.FC = () => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    pickupLocation: '',
    dropOffLocation: '',
    description: '',
    preferredDeliveryTime: '',
    priceOffer: 0,
    customerId: 13
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prevFormState: any) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // Dispatch the submitDeliveryRequest action with the form data
      dispatch(await submitDeliveryRequest(formState));
      console.log('Request submitted successfully!');

      // Reset the form state
      setFormState({
        pickupLocation: '',
        dropOffLocation: '',
        description: '',
        preferredDeliveryTime: '',
        priceOffer: 0,
        customerId: 13
      });

      // Redirect to home after successful submission
      redirect('/');
    } catch (error) {
      console.error('Error submitting request:', error);
      // Handle any error-related logic here
    }
  };

  return (
    <Styled.Container>
      <Styled.Title>Delivery Request Form</Styled.Title>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Label>
          Pickup Location:
          <Styled.Input
            type="text"
            name="pickupLocation"
            value={formState.pickupLocation}
            onChange={handleInputChange}
            required
          />
        </Styled.Label>

        <Styled.Label>
          Drop-off Location:
          <Styled.Input
            type="text"
            name="dropOffLocation"
            value={formState.dropOffLocation}
            onChange={handleInputChange}
            required
          />
        </Styled.Label>

        <Styled.Label>
          Description:
          <Styled.TextArea
            name="description"
            value={formState.description}
            onChange={handleInputChange}
            required
          />
        </Styled.Label>

        <Styled.Label>
          Preferred Delivery Time:
          <Styled.Input
            type="datetime-local"
            name="preferredDeliveryTime"
            value={formState.preferredDeliveryTime}
            onChange={handleInputChange}
            required
          />
        </Styled.Label>

        <Styled.Label>
          Price Offer (if applicable):
          <Styled.Input
            type="number"
            name="priceOffer"
            value={formState.priceOffer}
            onChange={handleInputChange}
          />
        </Styled.Label>
        <Styled.Button type="submit">Submit Request</Styled.Button>
      </Styled.Form>
      
      {/* Link to go back to home */}
      <Styled.BackToHomeLink to="/">Go Back to Home</Styled.BackToHomeLink>
    </Styled.Container>
  );
};

export default DeliveryRequestForm;
