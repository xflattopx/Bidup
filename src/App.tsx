import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import DeliveryRequestForm from './components/DeliveryRequestForm';

function App() {
  return (
    <div className="App">
      <h1>Bid Up</h1>
      <DeliveryRequestForm></DeliveryRequestForm>
    </div>
  );
}

export default App;
