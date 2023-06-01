import { combineReducers } from "@reduxjs/toolkit";
import movieReducers from "./movieReducers";
import authReducers from "./authReducers";

export default combineReducers({
  movies: movieReducers,
  auth: authReducers,
});
