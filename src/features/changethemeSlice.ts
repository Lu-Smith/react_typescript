import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ChangeThemeState {
  value: string
}

const initialState: ChangeThemeState = {
  value: "original",
}

export const changethemeSlice = createSlice({
  name: 'changetheme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    }
  },
})

export const { changeTheme} = changethemeSlice.actions

export default changethemeSlice.reducer