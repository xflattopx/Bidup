// src/components/DeliveryRequestForm.tsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitDeliveryRequest } from '../../redux/actions/deliveryRequestActions';
import './DeliveryRequestForm.css'; // Import the CSS file for styling
import axios from 'axios';

const DeliveryRequestForm: React.FC = () => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    pickupLocation: '',
    dropOffLocation: '',
    description: '',
    preferredDeliveryTime: '',
    priceOffer: 0,
    customerId: 2
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
        customerId: 2
      });
    } catch (error) {
      console.error('Error submitting request:', error);
      // Handle any error-related logic here
    }
  };

  return (
    <div className="delivery-request-form-container">
      <h2>Delivery Request Form</h2>
      <form onSubmit={handleSubmit} className="delivery-request-form">
        <label>
          Pickup Location:
          <input
            type="text"
            name="pickupLocation"
            value={formState.pickupLocation}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Drop-off Location:
          <input
            type="text"
            name="dropOffLocation"
            value={formState.dropOffLocation}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={formState.description}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Preferred Delivery Time:
          <input
            type="datetime-local"
            name="preferredDeliveryTime"
            value={formState.preferredDeliveryTime}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Price Offer (if applicable):
          <input
            type="number"
            name="priceOffer"
            value={formState.priceOffer}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default DeliveryRequestForm;