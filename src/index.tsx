// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers/rootReducer'; // Import your root reducer
import { createRoot } from 'react-dom/client';
import './index.css';
import { toContainElement } from '@testing-library/jest-dom/matchers';
//import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DeliveryRequestForm from './components/delivery_form/DeliveryRequestForm';
import Queue from './components/working_queue/Queue';
import Registration from './components/registration/Register';
import HomePage from './components/landing_page/HomePage';
import Profile from './components/profile/Profile';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import RegistrationSuccess from './components/registration/RegistrationSuccess';
import Register from './components/registration/Register';



// Create the Redux store with the root reducer
const store = createStore(rootReducer);
ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}>
          <Route path="home" element={<HomePage/>} />
          <Route path="register" element={<Register insertCustomerInformationAsync={()=>{return this}} />} />
          <Route path="login" element={<Login onLogin={function (credentials: { username: string; password: string; }): void {
            throw new Error('Function not implemented.');
          } }/>} />
          <Route path="queue" element={<Queue/>}/>
          <Route path="dashboard" element={<Dashboard driverId={0}/>}/>
          <Route path="profile" element={<Profile customerInfo={{
            firstName: '',
            lastName: '',
            email: ''
          }} onCancelRequest={function (requestId: number, callback: (success: boolean) => void): void {
            throw new Error('Function not implemented.');
          } }/>}/>
        </Route>
        <Route path="request-form" element={<DeliveryRequestForm/>}/>
        <Route path="registration-complete" element={<RegistrationSuccess/>}/>
     
      </Routes>
    </BrowserRouter>
    </Provider>,
    document.getElementById('root')
 )
    

  

// function createRoot(domNode: HTMLElement | null) {
//   throw new Error('Function not implemented.');
// }

