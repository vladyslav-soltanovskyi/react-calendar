import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { ModalProvider } from './providers/ModalProvider';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <ModalProvider>
    <App />
  </ModalProvider>,
  rootElement);
