import { combineReducers } from 'redux';
import deliveryFormReducer from './deliveryFormReducer';
import driversReducer from './driversReducer';

// Combine reducers
const rootReducer = combineReducers({
  deliveryForm: deliveryFormReducer,
  drivers: driversReducer,
  // Add other reducers as needed
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
