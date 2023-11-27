// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers/rootReducer'; // Import your root reducer
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DeliveryRequestForm from './components/delivery_form/DeliveryRequestForm';
import Queue from './components/working_queue/Queue';
import Registration from './components/registration/Register';
import HomePage from './components/landing_page/HomePage';
import Profile from './components/profile/Profile';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import Logout from './components/login/Logout';
import RegistrationSuccess from './components/registration/RegistrationSuccess';
import Register from './components/registration/Register';
import RequestSuccessful from './components/delivery_form/RequestSuccessful';
import LoadingSpinner from './components/loading_spinner/LoadingSpinner';

//'https://bidup-405619.ue.r.appspot.com'

// Create the Redux store with the root reducer
const store = createStore(rootReducer);
ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}>
          <Route path="home" element={<HomePage/>} />
          <Route path="register" element={<Register/>}/>
          <Route path="login" element={<Login onLogin={function (credentials: { email: string; password: string; }): Promise<{ token: string; role: string; }> {
            throw new Error('Function not implemented.');
          } }/>}/>
          <Route path="logout" element={<Logout/>} />
          <Route path="queue" element={<Queue setDriverId={function (driverId: number): void {
            throw new Error('Function not implemented.');
          } }/>}/>
          <Route path="dashboard" element={<Dashboard driverId={0}/>}/>
          <Route path="profile" element={<Profile customerInfo={{
            firstName: '',
            lastName: '',
            email: ''
          }} onCancelRequest={function (requestId: number): void {
            throw new Error('Function not implemented.');
          } }/>}/>
        </Route>
        <Route path="request-form" element={<DeliveryRequestForm />}/>
        <Route path="registration-complete" element={<RegistrationSuccess/>}/>
        <Route path="request-success" element={<RequestSuccessful/>}/>
        <Route path="loading-spinner" element={<LoadingSpinner/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>,
    document.getElementById('root')
 )
    

  

// function createRoot(domNode: HTMLElement | null) {
//   throw new Error('Function not implemented.');
// }

