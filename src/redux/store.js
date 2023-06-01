import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// Create the store
export default configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
