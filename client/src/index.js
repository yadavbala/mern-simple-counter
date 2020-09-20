import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import App from './App';
import configureStore from './store/store'
import { startGetCounters } from './action/counterAction';

const store=configureStore()

console.log('initial',store.getState())

store.subscribe(()=>{
  console.log('updated',store.getState())
})


store.dispatch(startGetCounters())

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>   
  ,
  document.getElementById('root')
);


