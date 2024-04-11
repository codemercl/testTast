import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBhnuv-p1veXZ5EK5YCFsfQAkAmoFSRDLk",
  authDomain: "testtask-6e9d3.firebaseapp.com",
  databaseURL: "https://testtask-6e9d3-default-rtdb.firebaseio.com/",
  projectId: "testtask-6e9d3",
  storageBucket: "testtask-6e9d3.appspot.com",
  messagingSenderId: "207792569704",
  appId: "1:207792569704:web:889c92f94c20e1a12eeadd"
};

export const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)