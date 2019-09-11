import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import manageUsers from './reducers/manageUsers'
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const store = createStore(
  manageUsers,
  window.__REDUC_DEVTOOLS_EXTENTION__ &&  window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
