import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/app/app';
import HistoryRouter from './components/history-router/history-router';
import browserHistory from './browser-history';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <HistoryRouter history={browserHistory}>
      <App />
    </HistoryRouter>
  </Provider>,
);
