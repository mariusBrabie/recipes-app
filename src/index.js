import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import './styles/index.css'
import 'normalize.css/normalize.css'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);

