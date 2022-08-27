import { configureStore } from '@reduxjs/toolkit';
import changethemeReducer from '../features/changethemeSlice';
import typesReducer from '../features/typesSlice';


export const store = configureStore({
    reducer: {
        changetheme: changethemeReducer,
        types: typesReducer,
    },
  })

  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch