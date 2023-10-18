import { createSlice } from '@reduxjs/toolkit'

const modeSlice = createSlice({
  name: 'mode',
  initialState:'dark',
  reducers: {
    toggleMode:(state)=>{
      state= state === 'light' ? 'dark' : 'light';
      return state;
    },
  },
})

export const {toggleMode} = modeSlice.actions;
export default modeSlice.reducer;