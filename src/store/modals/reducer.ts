import { createSlice } from '@reduxjs/toolkit';
import { IModalsState } from './types';
import {
  openModalCreate,
  openModalDayInfo,
  openModalEdit,
  closeModalCreate,
  closeModalDayInfo,
  closeModalEdit
} from './actions';

const initialState: IModalsState = {
  isOpenModalEditEvent: false,
  isOpenModalCreateEvent: false,
  isOpenModalDayInfoEvents: false,
  modalCreateEventOptions: null,
  modalEditEventOptions: null,
  selectedDate: null
}

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(openModalCreate, (state, { payload }) => {
        state.isOpenModalCreateEvent = true;
        state.modalCreateEventOptions = payload;
      })
      .addCase(closeModalCreate, (state) => {
        state.isOpenModalCreateEvent = false;
        state.modalCreateEventOptions = null;
      })
      .addCase(openModalDayInfo, (state, { payload }) => {
        state.isOpenModalDayInfoEvents = true;
        state.selectedDate = payload;
      })
      .addCase(closeModalDayInfo, (state) => {
        state.isOpenModalDayInfoEvents = false;
        state.selectedDate = null;
      })
      .addCase(openModalEdit, (state, { payload }) => {
        state.isOpenModalEditEvent = true;
        state.modalEditEventOptions = payload;
      })
      .addCase(closeModalEdit, (state) => {
        state.isOpenModalEditEvent = false;
        state.modalEditEventOptions = null;
      })
  },
  reducers: {}
})

export const { reducer } = modalsSlice