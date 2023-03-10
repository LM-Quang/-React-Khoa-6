import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./Reducers/shopReducer.js";

// Built-in Redux Thunk, Redux Dev Tool
export const configStore = configureStore({
   reducer: {
      shopReducer,
   },
});
