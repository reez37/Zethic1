import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import createsagamw from "redux-saga"
import {configureStore} from '@reduxjs/toolkit'
import reducer from './redux/reducer';
import datasaga from './redux/saga';

const saga = createsagamw();
const store = configureStore({
  reducer:{
    computedata:reducer
  },
  middleware:[saga]
})

saga.run(datasaga)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
