import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

//firebaseここから

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNMx52QK5aHshR7YSK7yS58X47L_gNiTQ",
  authDomain: "reactfirebase-c5e27.firebaseapp.com",
  projectId: "reactfirebase-c5e27",
  storageBucket: "reactfirebase-c5e27.appspot.com",
  messagingSenderId: "186414064640",
  appId: "1:186414064640:web:add1942c5d1562794364e5",
  measurementId: "G-KSLW892D80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//ここまで

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
