import { createAction } from '@reduxjs/toolkit';
import { IPopupOptions } from './types';

export const openPopup = createAction<IPopupOptions>('popups/IOptionsPopup');

export const closePopup = createAction('popups/closePopup');