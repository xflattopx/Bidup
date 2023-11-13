// src/redux/reducers/index.ts
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  // Add other reducers here if needed
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
