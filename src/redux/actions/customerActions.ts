import { Action } from '@remix-run/router';
import axios from 'axios';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/rootReducer';

// Action Types
export const SUBMIT_CUSTOMER_REQUEST = 'SUBMIT_CUSTOMER_REQUEST';
export const CANCEL_CUSTOMER_REQUEST = 'CANCEL_CUSTOMER_REQUEST';
export const UPDATE_CUSTOMER_INFO = 'UPDATE_CUSTOMER_INFO';
export const INSERT_CUSTOMER_INFO = 'INSERT_CUSTOMER_INFO';
export const SUCCESSFUL_CUSTOMER_REGISTRATION = 'SUCCESSFUL_CUSTOMER_REGISTRATION';
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
  }
}

interface InsertCustomerInfoAction{
  type: typeof INSERT_CUSTOMER_INFO
  payload: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    role: string;
  }
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
  (isRegistered : boolean) => async (dispatch: Dispatch) =>{
  try{
  dispatch({
    type: SUCCESSFUL_CUSTOMER_REGISTRATION,
    payload: {
      isRegistered : isRegistered
    },
  })

} catch (error){
  console.error('error registering account:',error);
}}

export const insertCustomerInformation = (insertCustomerInfo:InsertCustomerInfoAction) => async (dispatch: Dispatch) =>{
  try{
    await axios.post('/register', {
      insertCustomerInfo
    }).then(( response:any) => {
      dispatch({
        type: INSERT_CUSTOMER_INFO,
        payload: {
          firstName: insertCustomerInfo.payload.firstname,
          lastName: insertCustomerInfo.payload.lastname,
          email: insertCustomerInfo.payload.email,
          password: insertCustomerInfo.payload.password,
          role: insertCustomerInfo.payload.role
        }
      });
    
      const registrationMessage = `Thank you for registering, ${insertCustomerInfo.payload.firstname}!`;

    // Dispatch an action with the registration message to the /registration-success component
    dispatch({
      type: 'REGISTRATION_MESSAGE',
      payload: {
        message: registrationMessage,
      },
    });

    return Promise.resolve(response);
    });
  } catch (error){
    console.error('error inserting details into our system:',error);
  }};

  // customerActions.ts

  export const insertCustomerInformationAsync = (formData:any) => async (dispatch: Dispatch) =>{
        console.log('here')
      // Make API call to insert customer information

      // Dispatch the action with the response data
      dispatch({
        type: INSERT_CUSTOMER_INFO,
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
