import { configureStore } from '@reduxjs/toolkit';

import { reducers } from './rootReducer';

export const store = configureStore({
  reducer: reducers,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export type TypeRootState = ReturnType<typeof store.getState>