import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from './store/configureStore';
import { history } from './helpers'
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import { ThemeProvider } from  './commons/Theme/ThemeProvider';

import './style.css';

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = window.initialReduxState;
const store = configureStore(history, initialState);

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  rootElement);

registerServiceWorker();
