// src/redux/reducers/counterReducer.ts
// This acts as a template....
import { CounterAction } from '../actions/counterActions';

const initialState = 0;

const counterReducer = (state = initialState, action: CounterAction): number => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
