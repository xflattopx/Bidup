// src/redux/actions/deliveryRequestActions.ts

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
  
  export const submitDeliveryRequest = (formData: SubmitDeliveryRequestAction['payload']): SubmitDeliveryRequestAction => ({
    type: 'SUBMIT_DELIVERY_REQUEST',
    payload: formData,
  });
  