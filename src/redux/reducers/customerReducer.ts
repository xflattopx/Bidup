import { CANCEL_CUSTOMER_REQUEST, SUBMIT_CUSTOMER_REQUEST, UPDATE_CUSTOMER_INFO } from "../actions/customerActions";

interface CustomerState {
    customerInfo: {
      firstName: string;
      lastName: string;
      email: string;
      role: string;
    };
    requestHistory: {
      id: number;
      pickupLocation: string;
      dropoffLocation: string;
      description: string;
      preferredDeliveryTime: string;
      priceOffer: number;
      status: string;
    }[];
    submittedRequests: any[]; // Add this line
  }
  
  // Initial State
  // Initial State
const initialState: CustomerState = {
    customerInfo: {
      firstName: '',
      lastName: '',
      email: '',
      role: 'customer', // Adding the missing comma here
      // Initialize other properties as needed
    },
    requestHistory: [],
    submittedRequests: [], // Add this line
    // Initialize other properties as needed
  };
  
  // Reducer
const customerReducer = (state = initialState, action: any): CustomerState => {
    switch (action.type) {
      case 'SUBMIT_CUSTOMER_REQUEST':
        // Assuming you have a property like "submittedRequests" to store submitted requests
        return {
          ...state,
          submittedRequests: [...state.submittedRequests, action.payload],
        };
      case 'UPDATE_CUSTOMER_INFO':
        return {
          ...state,
          customerInfo: {
            ...state.customerInfo,
            ...action.payload,
          },
        };
      // Add other cases as needed
      default:
        return state;
    }
  };
  
  export default customerReducer;
  