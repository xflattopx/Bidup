import { combineReducers } from 'redux';
import deliveryFormReducer from './deliveryFormReducer';
import driversReducer from './driversReducer';
import customerReducer from './customerReducer';

// Combine reducers
const rootReducer = combineReducers({
  deliveryForm: deliveryFormReducer,
  drivers: driversReducer,
  customers: customerReducer  
  // Add other reducers as needed
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
