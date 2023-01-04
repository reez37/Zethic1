import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  computedata: [],
}

export const dataSlice = createSlice({
  name: 'computedata',
  initialState,
  reducers: {
    fetchdata: (state, action) => {
      state.computedata = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { fetchdata } = dataSlice.actions

export default dataSlice.reducer