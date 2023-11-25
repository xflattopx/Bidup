import { Action } from '@remix-run/router';
import axios from 'axios';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/rootReducer';

// Action Types
export const SUBMIT_CUSTOMER_REQUEST = 'SUBMIT_CUSTOMER_REQUEST';
export const CANCEL_CUSTOMER_REQUEST = 'CANCEL_CUSTOMER_REQUEST';
export const UPDATE_CUSTOMER_INFO = 'UPDATE_CUSTOMER_INFO';
export const INSERT_USER_INFO = 'INSERT_USER_INFO';
export const SUCCESSFUL_USER_REGISTRATION = 'SUCCESSFUL_USER_REGISTRATION';
export const REGISTRATION_MESSAGE = 'REGISTRATION_MESSAGE';

// Action Creators
interface SubmitCustomerRequestAction {
  type: typeof SUBMIT_CUSTOMER_REQUEST;
  payload: {
    // Define payload properties here
  };
}

interface CancelCustomerRequestAction {
  type: typeof CANCEL_CUSTOMER_REQUEST;
  payload: {
    requestId: number;
  };
}

interface UpdateCustomerInfoAction{
  type: typeof UPDATE_CUSTOMER_INFO
  payload: {
    firstname: string;
    lastname: string;
    email: string;
  };
}


interface InsertCustomerInfoAction{
  type: typeof INSERT_USER_INFO
  payload: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    role: string;
  };
}


// Async Action Creator using Thunk
export const submitCustomerRequest = (
  formData: any
): ThunkAction<void, RootState, unknown, SubmitCustomerRequestAction> => async (dispatch: Dispatch) => {
  try {
    // Make API call to submit customer request
    const response = await axios.post('http://localhost:4200/customer_request', formData);

    // Dispatch action with success message or additional data if needed
    dispatch({
      type: SUBMIT_CUSTOMER_REQUEST,
      payload: {
        // Add payload properties here
      },
    });
  } catch (error) {
    // Handle error and dispatch failure action if needed
    console.error('Error submitting customer request:', error);
  }
};

export const setRegistrationSuccess = 
  (isRegistered : boolean, registrationMessage: string) => async (dispatch: Dispatch) =>{
  
  console.log('setting user registration to true and displaying message')
  dispatch({
    type: 'SUCCESSFUL_REQUEST_MESSAGE',
    payload: {
      successfulRequest : isRegistered,
      successMessage: registrationMessage,
    },
  })
  // Dispatch an action with the registration message to the /registration-success component
  dispatch({
    type: REGISTRATION_MESSAGE,
    payload: {
      
    },
  });


  }



export const insertUserInformation = (userInfo:any) => async (dispatch: Dispatch) =>{

      dispatch({
        type: INSERT_USER_INFO,
        payload: {
          firstName: userInfo.payload.firstname,
          lastName: userInfo.payload.lastname,
          email: userInfo.payload.email,
          role: userInfo.payload.role
        }
      });
    
  }
    

 
  // customerActions.ts

  export const insertUserInformationAsync = (formData:any) => async (dispatch: Dispatch) =>{
        console.log('here')
      // Make API call to insert customer information

      // Dispatch the action with the response data
      dispatch({
        type: INSERT_USER_INFO,
        payload: {
          firstName: formData.firstname,
          lastName: formData.lastname,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        }
      });

      // Dispatch an action with the registration message to the /registration-success component
      const registrationMessage = `Thank you for registering, ${formData.firstname}!`;
      dispatch({
        type: REGISTRATION_MESSAGE,
        payload: {
          message: registrationMessage,
        },
      });

    };
  

// Similarly, update other action creators as needed
export const cancelCustomerRequest = (
  requestId: number
): CancelCustomerRequestAction => ({
  type: CANCEL_CUSTOMER_REQUEST,
  payload: {
    requestId,
  },
});


export const updateCustomerInfo = (
  info: UpdateCustomerInfoAction['payload']
): ThunkAction<void, RootState, unknown, UpdateCustomerInfoAction> => async (dispatch, getState) => {
  try {
    // Assuming you have an API endpoint for updating customer information
    const response = await axios.post('/api/update-customer-info', info);

    // Assuming the API returns the updated customer information
    const updatedInfo = response.data;

    // Dispatch the action with the updated information
    dispatch({
      type: 'UPDATE_CUSTOMER_INFO',
      payload: updatedInfo,
    });
  } catch (error) {
    // Handle errors here
    console.error('Error updating customer info:', error);
  }
};
