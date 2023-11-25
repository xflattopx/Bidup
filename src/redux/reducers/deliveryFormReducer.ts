//deliveryFormReducer.ts

// State Interface
interface DeliveryFormState {
  successfulRequest: boolean;
  successMessage: string;
}

// Initial State
const initialState: DeliveryFormState = {
  successfulRequest: false,
  successMessage: '',
};

// Reducer
const deliveryFormReducer = (state = initialState, action: any): DeliveryFormState => {
  switch (action.type) {
    case 'SUCCESSFUL_REQUEST_MESSAGE':
      return {
      
        ...state,
        successfulRequest: action.payload.successfulRequest,
        successMessage: action.payload.successMessage,
      };
    default:
      return state;
  }
};

export default deliveryFormReducer;
