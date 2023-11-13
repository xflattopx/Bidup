import React from 'react';
import logo from './logo.svg';
import './App.css';
import DeliveryRequestForm from './components/delivery_form/DeliveryRequestForm';
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import Queue from './components/working_queue/Queue';
function App() {
  return (
    <div className="App">
      <h1>Bid Up</h1>
      <DeliveryRequestForm></DeliveryRequestForm>
      <Queue></Queue>
    </div>
  );
}

export default App;
