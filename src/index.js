import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO0WWJhETy25tIVwRrhFtt52msxFKMis8",
  authDomain: "prime-clone-e1de6.firebaseapp.com",
  databaseURL: "https://prime-clone-e1de6.firebaseio.com",
  projectId: "prime-clone-e1de6",
  storageBucket: "prime-clone-e1de6.appspot.com",
  messagingSenderId: "536067131178",
  appId: "1:536067131178:web:f9642c8a945f59209c4053",
  measurementId: "G-ELR0K1QTZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
