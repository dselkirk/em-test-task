import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import { Provider } from 'react-redux';
import HomePage from './pages/home/index';
import {store} from './store';


ReactDOM.render(
  <Provider store={store}>
    <HomePage/>
  </Provider>,
  document.getElementById('container')
);

// Eliminates the 300ms delay between a physical tap
// and the firing of a click event on mobile browsers
// https://github.com/ftlabs/fastclick
FastClick.attach(document.body);
