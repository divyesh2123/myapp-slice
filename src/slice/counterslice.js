import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value : 0
}

const counterslice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    increment: (state) => {
        state.value += 1;
      },
      decrement: (state) => {
        if (state.value > 0) {
          state.value -= 1;
        }
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload;
      },


  }
});

export const {increment,decrement,incrementByAmount} =
 counterslice.actions

export default counterslice.reducer