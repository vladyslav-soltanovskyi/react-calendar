import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ModalProvider } from './providers/ModalProvider';
import { PopupProvider } from './providers/PopupProvider';
import { Provider as StoreProvider } from 'react-redux';
import { store } from 'store/store';

import './index.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <StoreProvider store={store}>
    <ModalProvider>
      <PopupProvider>
        <App />
      </PopupProvider>
    </ModalProvider>
  </StoreProvider>, rootElement);
