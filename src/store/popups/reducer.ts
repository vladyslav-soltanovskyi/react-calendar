import { createSlice } from '@reduxjs/toolkit';
import { IPopupState } from './types';
import {
  openPopup,
  closePopup
} from './actions';

const initialState: IPopupState = {
  isOpenPopup: false,
  popupOptions: null
}

export const popupsSlice = createSlice({
  name: 'popups',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(openPopup, (state, { payload }) => {
        state.isOpenPopup = true;
        state.popupOptions = payload;
      })
      .addCase(closePopup, (state) => {
        state.isOpenPopup = false;
        state.popupOptions = null;
      })
  },
  reducers: {}
})

export const { reducer } = popupsSlice