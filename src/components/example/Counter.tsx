import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../redux/actions'; // Adjust the path based on your project structure
import { RootState } from '../../redux/reducers';
const Counter: React.FC = () => {
  // Get the count from the Redux store
  const count = useSelector((state: RootState) => state.count);

  // Create a dispatch function to dispatch actions
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
