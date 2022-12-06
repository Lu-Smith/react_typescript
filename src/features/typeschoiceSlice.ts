import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import * as data from '../typesdata.json';

const typesdataString = JSON.stringify(data);
let typesdata = JSON.parse(typesdataString).typesdata;

export interface Types {
    id: number;
    src: string;
    name: string;
  }

export interface TypeState {
  value: Types[]
}

const initialState: TypeState = {
  value: typesdata,
}

export const typeschoiceSlice = createSlice({
  name: 'typeschoice',
  initialState,
  reducers: {
    removeTypeChoice: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1)
    },
    addTypeChoice: (state, action: PayloadAction<Types>) => {
      state.value.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { removeTypeChoice, addTypeChoice } = typeschoiceSlice.actions

export default typeschoiceSlice.reducer