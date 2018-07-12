import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux';
//import todoApp from './Reducers';
import { Provider } from 'react-redux';
import login from './Reducers/login';
import {BrowserRouter} from 'react-router-dom'

const store = createStore(login)
ReactDOM.render( <Provider store = {store} > 
  <BrowserRouter>
      <App />
 </BrowserRouter>
   
</Provider> ,
 document.getElementById('root'));