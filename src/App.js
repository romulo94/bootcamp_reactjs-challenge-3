import React from 'react';

import './App.css';
import 'font-awesome/css/font-awesome.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import store from './store';

import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <Routes />
    <ToastContainer autoClose={5000} />
  </Provider>
);

export default App;
