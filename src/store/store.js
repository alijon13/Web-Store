import { configureStore } from "@reduxjs/toolkit";
import home from "../reducers/home/home";

export const store = configureStore({
  reducer: {
    home
  },
});