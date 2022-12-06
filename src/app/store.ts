import { configureStore } from '@reduxjs/toolkit';
import changethemeReducer from '../features/changethemeSlice';
import typesReducer from '../features/typesSlice';
import typeschoiceReducer from '../features/typeschoiceSlice';


export const store = configureStore({
    reducer: {
        changetheme: changethemeReducer,
        types: typesReducer,
        typeschoice: typeschoiceReducer,
    },
  })

  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch