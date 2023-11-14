// State Interface
interface DriversState {
    driverId: number | null; // Assuming driverId is a number
    // Add other driver-related fields as needed
  }
  
  // Initial State
  const initialDriversState: DriversState = {
    driverId: null,
    // Initialize other driver-related fields
  };
  
  // Reducer
  const driversReducer = (state = initialDriversState, action: any): DriversState => {
    switch (action.type) {
      case 'SET_DRIVER_ID':
        return {
          ...state,
          driverId: action.payload.driverId,
        };
      // Add other driver-related cases as needed
      default:
        return state;
    }
  };
  
  export default driversReducer;
  