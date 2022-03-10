import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Quiz from './Components/Quiz'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>


    <Quiz />
  </BrowserRouter>
 
  ,
  document.getElementById('root')
);

reportWebVitals();

