import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resultCount: 0,
  results: [],
};

export const performSlice = createSlice({
  name: "displayData",
  initialState,
  reducers: {
    getDefaultDisplay: (state, { payload }) => {
      state.resultCount = payload.length;
      state.results = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getDefaultDisplay } = performSlice.actions;

export default performSlice.reducer;
