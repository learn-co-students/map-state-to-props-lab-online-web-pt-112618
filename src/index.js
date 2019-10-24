import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import manageUsers from './reducers/manageUsers'
//combined reducers allows
//reducers don't get imported, because of the store/which is the global state 
//mapStatetoProps connects to store 
//mapDispatch has to do with actions
//Provider wraps app/store, allows react components to access mapStateToProps

//createStore accepts three arguments 
//most important is the reducer 
const store = createStore(
  manageUsers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
 

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);



//createStore method --> always
//dispatch method is used to dispatch actions and update the state


//deconstructor { } means creating variable: keys are Provider and createStore
//Redux has function called Create Store that I am accessing 
//Provider is a component 