// src/redux/actions/deliveryRequestActions.ts
import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import { AnyAction, Dispatch } from 'redux'; 
import { useDispatch } from 'react-redux';

interface SubmitDeliveryRequestAction {
    type: 'SUBMIT_DELIVERY_REQUEST';
    payload: {
      pickupLocation: string;
      dropOffLocation: string;
      description: string;
      preferredDeliveryTime: string;
      priceOffer: number;
    };
  }
  
  export const submitDeliveryRequest = (
    formData: SubmitDeliveryRequestAction['payload']
  ): Promise<any> => {
      const request = JSON.stringify(formData);
    return axios.post('http://localhost:4200/customer_request',formData)
      .then((response) => {
        // Assuming your backend returns the requestId
        console.log('Request submitted successfully, checking if we need to populate queue', response.data);
        return Promise.resolve();
      })
      .catch((error) => {
        console.error('Error submitting request');
        // Handle any error-related logic here
        return Promise.reject(error);
      });
  };




  