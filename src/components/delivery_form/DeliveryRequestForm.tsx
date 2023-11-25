// src/components/DeliveryRequestForm.tsx

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitDeliveryRequest } from '../../redux/actions/deliveryRequestActions';
import * as Styled from './styles';
import { RootState } from '../../redux/reducers/rootReducer';
import LoadingSpinner from '../loading_spinner/LoadingSpinner';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Import the logo image
import BidUpLogo from './/BidUpLogo.png';

interface DeliveryRequestFormProps {
  // Add any additional props if needed
}

const DeliveryRequestForm: React.FC<DeliveryRequestFormProps> = () => {
  const userId = useSelector((state: RootState) => state.users.userId);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const [formState, setFormState] = useState({
    pickupLocation: '',
    dropOffLocation: '',
    description: '',
    preferredDeliveryTime: '',
    priceOffer: 0,
    customerId: userId,
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
      setLoading(true);

      //dispatch(await submitDeliveryRequest(formState));
      axios.post('http://localhost:4200/customer_request', formState);

      setFormState({
        pickupLocation: '',
        dropOffLocation: '',
        description: '',
        preferredDeliveryTime: '',
        priceOffer: 0,
        customerId: userId,
      });

      setTimeout(() => {
        setLoading(false);
        navigate('/request-success');
      }, 3000);
    } catch (error) {
      console.error('Error submitting request:', error);
      setLoading(false);
    }
  };

  return (
    <Styled.Container>
      {/* Logo container */}
      <Styled.LogoContainer>
        <Styled.LogoImage src={BidUpLogo} alt="BidUp Logo" />
      </Styled.LogoContainer>

      {/* <Styled.Title>Delivery Request Form</Styled.Title> */}
      {loading ? (
        <LoadingSpinner />
      ) : (
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
      )}
      <Styled.BackToHomeLink to="/profile">Go Back to Home</Styled.BackToHomeLink>
    </Styled.Container>
  );
};

export default DeliveryRequestForm;
