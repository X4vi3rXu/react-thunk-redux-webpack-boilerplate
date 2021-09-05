import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './configureStore';
const cs = configureStore();

global.configureStore = cs;

ReactDOM.render(
  <Provider store={cs}>
    <App />
  </Provider>,
  document.getElementById('app')
);

if (process.env.NODE_ENV === 'development' && module && module.hot) {
  module.hot.accept(`./configureStore`, () => {
    cs.replaceReducer(require(`./store/rootReducer`).default);
  });
}
