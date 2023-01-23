import { createAction } from '@reduxjs/toolkit';
import { IOptionsPopup } from 'providers/PopupProvider/types';

export const openPopup = createAction<IOptionsPopup>('popups/IOptionsPopup');

export const closePopup = createAction('popups/closePopup');