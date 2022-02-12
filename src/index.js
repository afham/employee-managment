import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store/store'
import { Provider } from 'react-redux';
import { Spinner } from 'react-bootstrap'

ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>,
  document.getElementById('root')
);


