import { configureStore } from "@reduxjs/toolkit";
import initDataSlice from "../features/getInitDataSlice";
import performSlice from "../features/performSlice";

export const store = configureStore({
  reducer: {
    init: initDataSlice,
    perform: performSlice,
  },
});
