import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import store from './redux/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

const stripePromise = loadStripe('pk_test_51IHDRIB6EMC3MW6zJL3FL9HNXn2TWBx0GgmPzxkfjVLtws1CdEI6JZY2ia0DiDe6dBAB8KzgQSVTmz9K6mJKknqd00guMO9F4m')

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
