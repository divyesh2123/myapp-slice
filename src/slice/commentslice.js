import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    comnents: [],
    error :{}
}

const commentslice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    fetchTodos:  () => {},
    setTodos: (state, action) => {
      state.comnents = action.payload;
    },
    errorfetch : (state,action) =>{

        state.error = action.payload
    }

  }
});

export const {fetchTodos,setTodos,errorfetch} = commentslice.actions

export default commentslice.reducer