import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Types {
    id: number;
    src: string;
    name: string;
  }

export interface TypeState {
  value: Types[]
}

const initialState: TypeState = {
  value: [],
}

export const typesSlice = createSlice({
  name: 'types',
  initialState,
  reducers: {
    removeType: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1)
    },
    addType: (state, action: PayloadAction<Types>) => {
      state.value.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { removeType, addType } = typesSlice.actions

export default typesSlice.reducer