import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDefaultDisplay } from "../features/performSlice";
import axios from "axios";
const initialState = {
  resultCount: 0,
  results: [],
  status: "",
  key: "",
};

export const getInitData = createAsyncThunk(
  "getInit/getInitData",
  async (name, { dispatch }) => {
    const initData = await axios.get(
      `https://itunes.apple.com/search?term=${name}&media=music&entity=album&attribute=artistTerm&limit=200`
    );

    dispatch(update_key(name));
    dispatch(getDefaultDisplay(initData.data.results.slice(0, 20)));
    return initData.data;
  }
);

export const initDataSlice = createSlice({
  name: "getInit",
  initialState,
  reducers: {
    update_key: (state, action) => {
      state.key = action.payload;
    },
  },
  extraReducers: {
    [getInitData.pending]: (state) => {
      state.status = "loading";
    },
    [getInitData.fulfilled]: (state, action) => {
      state.resultCount = action.payload.resultCount;
      state.results = action.payload.results;
      state.status = "success";
    },
    [getInitData.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

// Action creators are generated for each case reducer function
export const { update_key } = initDataSlice.actions;

export default initDataSlice.reducer;
