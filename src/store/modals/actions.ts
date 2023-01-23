import { createAction } from '@reduxjs/toolkit';
import { IModalCreateEventOptions, IModalEditEventOptions } from './types';

export const openModalEdit = createAction<IModalEditEventOptions>('modals/openModalEdit');

export const closeModalEdit = createAction('modals/closeModalEdit');

export const openModalCreate = createAction<IModalCreateEventOptions>('modals/openModalCreate');

export const closeModalCreate = createAction('modals/closeModalCreate');

export const openModalDayInfo = createAction<Date>('modals/openModalDayInfo');

export const closeModalDayInfo = createAction('modals/closeModalDayInfo');
