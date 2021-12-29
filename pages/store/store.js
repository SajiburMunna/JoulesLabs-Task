import { configureStore } from "@reduxjs/toolkit";
import { rootReducers } from "../../pages/store/rootreducer.js";

export const store = configureStore({
  reducer: rootReducers,

  devTools: process.env.Node_ENV !== "production",
});
