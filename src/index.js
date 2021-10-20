import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import {MCCO} from './mcco';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MCCO />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
