import { createSlice } from '@reduxjs/toolkit'
import { IEventsState } from './types'
import { getEvents, createEvent, updateEvent, deleteEvent } from './actions'

const initialState: IEventsState = {
  events: []
}

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getEvents.fulfilled, (state, { payload }) => {
        state.events = payload
      })
      .addCase(updateEvent.fulfilled, (state, { payload }) => {
        const { eventId, updatedEvent } = payload;
        state.events = state.events.map(event => event.id === eventId ? updatedEvent : event);
      })
      .addCase(deleteEvent.fulfilled, (state, { payload }) => {
        const { eventId } = payload;
        state.events = state.events.filter(event => event.id !== eventId);
      })
      .addCase(createEvent.fulfilled, (state, { payload }) => {
        state.events = [...state.events, payload]
      })
  },
  reducers: {}
})

export const { reducer } = eventsSlice