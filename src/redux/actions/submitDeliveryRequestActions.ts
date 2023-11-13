// src/redux/actions/submitDeliveryRequestActions.ts

export const submitDeliveryRequest = (requestData: any) => {
    // Logic to submit the delivery request to the server
    return async (dispatch: any) => {
      try {
        // Perform the API request or any asynchronous operation here
        // For example, you can use fetch or axios to send the data to your server
        const response = await fetch('your-api-endpoint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });
  
        // Assuming the server responds with JSON, you can parse it
        const result = await response.json();
  
        // Dispatch an action indicating success or failure
        dispatch(requestSubmitted(result));
      } catch (error) {
        // Handle any errors that occurred during the request
        console.error('Error submitting request:', error);
        // Optionally, dispatch an action indicating the failure
        // dispatch(requestFailed(error));
      }
    };
  };
  
  // Action to be dispatched when the request is submitted successfully
  export const requestSubmitted = (result: any) => ({
    type: 'REQUEST_SUBMITTED',
    payload: result,
  });
  