import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { ModalProvider } from './providers/ModalProvider';
import { EventsStoreProvider } from './providers/EventsStore';
import { PopupProvider } from './providers/PopupProvider';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <EventsStoreProvider>
    <ModalProvider>
      <PopupProvider>
        <App />
      </PopupProvider>
    </ModalProvider>
  </EventsStoreProvider>, rootElement);
