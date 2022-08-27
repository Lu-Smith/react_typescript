import { configureStore } from '@reduxjs/toolkit';
import changethemeReducer from '../features/changethemeSlice';


export const store = configureStore({
    reducer: {
        changetheme: changethemeReducer,
    },
  })

  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch