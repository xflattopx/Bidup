import React from 'react';
import logo from './logo.svg';
import './App.css';
import DeliveryRequestForm from './components/delivery_form/DeliveryRequestForm';
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import Queue from './components/working_queue/Queue';
import Registration from './components/registration/Register';
import HomePage from './components/landing_page/HomePage';
import Profile from './components/profile/Profile';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
function App() {
  return (
    <div className="App">
      <h1>Bid Up</h1>
      <HomePage></HomePage>
      <Registration></Registration>
      <Login onLogin={function (credentials: { username: string; password: string; }): void {
        throw new Error('Function not implemented.');
      } }></Login>
      <Profile customerInfo={{
        firstName: 'Chase',
        lastName: 'Moore',
        email: 'moorew13@students.ecu.edu'
      }} requestHistory={[]} onCancelRequest={function (requestId: number): void {
        throw new Error('Function not implemented.');
      } }></Profile>
      <Dashboard driverId={0}></Dashboard>
      <DeliveryRequestForm></DeliveryRequestForm>
      <Queue></Queue>
    </div>
  );
}

export default App;
