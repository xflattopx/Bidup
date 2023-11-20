import { SUCCESSFUL_CUSTOMER_REGISTRATION, INSERT_CUSTOMER_INFO, REGISTRATION_MESSAGE } from "../actions/customerActions";

interface CustomerState {
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    isRegistered: boolean,
    registrationMessage: string;
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
const initialState: CustomerState = {
  customerInfo: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'Customer',
    isRegistered: false,
    registrationMessage: ''
  },
  requestHistory: [],
  submittedRequests: [], // Add this line
};

const customerRegistrationReducer = (state = initialState, action: any): CustomerState => {
  switch (action.type) { // Use action.type to check the action type
    case INSERT_CUSTOMER_INFO:
      return {
        ...state,
        customerInfo: {
          ...state.customerInfo,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          password: action.payload.password,
          role: 'Customer'
        }
      };
    case SUCCESSFUL_CUSTOMER_REGISTRATION:
      return {
        ...state,
          customerInfo: {
            ...state.customerInfo,
            isRegistered: true
          }
      };
    case REGISTRATION_MESSAGE:
      return {
        ...state,
          customerInfo: {
            ...state.customerInfo,
            registrationMessage: action.payload.registrationMessage
          }
      };
    default:
      return state;
  }
};

export default customerRegistrationReducer;
