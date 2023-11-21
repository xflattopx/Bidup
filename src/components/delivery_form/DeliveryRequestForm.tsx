// src/components/DeliveryRequestForm.tsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitDeliveryRequest } from '../../redux/actions/deliveryRequestActions';
import styled from 'styled-components';
import axios from 'axios';

// Styled Components
const Container = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #f4f4f4;
`;

const Title = styled.h2`
  font-size: 2em;
  color: #1a1a1a;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const Button = styled.button`
  background-color: #1a1a1a;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  padding: 10px;
`;

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
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // Print the form state to the console
      //console.log('Form State:', formState);

      // Dispatch the submitDeliveryRequest action with the form data
      //await axios.post('http://localhost:4200/customer_request',formState);
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
    } catch (error) {
      console.error('Error submitting request:', error);
      // Handle any error-related logic here
    }
  };

  return (
    <Container>
      <Title>Delivery Request Form</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          Pickup Location:
          <Input
            type="text"
            name="pickupLocation"
            value={formState.pickupLocation}
            onChange={handleInputChange}
            required
          />
        </Label>

        <Label>
          Drop-off Location:
          <Input
            type="text"
            name="dropOffLocation"
            value={formState.dropOffLocation}
            onChange={handleInputChange}
            required
          />
        </Label>

        <Label>
          Description:
          <TextArea
            name="description"
            value={formState.description}
            onChange={handleInputChange}
            required
          />
        </Label>

        <Label>
          Preferred Delivery Time:
          <Input
            type="datetime-local"
            name="preferredDeliveryTime"
            value={formState.preferredDeliveryTime}
            onChange={handleInputChange}
            required
          />
        </Label>

        <Label>
          Price Offer (if applicable):
          <Input
            type="number"
            name="priceOffer"
            value={formState.priceOffer}
            onChange={handleInputChange}
          />
        </Label>
        <Button type="submit">Submit Request</Button>
      </Form>
    </Container>
  );
};

export default DeliveryRequestForm;
