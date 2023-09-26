import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { accountReducer } from './reducers/account';
import { bonusReducer } from './reducers/bonus';
import logger from 'redux-logger';
import thunk from "redux-thunk";
import { Provider  } from 'react-redux';

//Root Reducer

const rootReducer = combineReducers({
  account: accountReducer,
  bonus: bonusReducer,
});

// const history =[];

// Central Store
const store = createStore(
  rootReducer, 
  applyMiddleware(logger, thunk )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider>
   <App /> 
   </Provider>
  </React.StrictMode>
);

