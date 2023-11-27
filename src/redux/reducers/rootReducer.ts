import { combineReducers } from 'redux';
import deliveryFormReducer from './deliveryFormReducer';
import driversReducer from './driversReducer';
import userReducer from './userReducer';

// Combine reducers
const rootReducer = combineReducers({
  deliveryForm: deliveryFormReducer,
  drivers: driversReducer,
  users: userReducer  
  // Add other reducers as needed
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
