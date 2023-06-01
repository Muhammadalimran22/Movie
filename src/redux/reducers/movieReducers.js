import { createSlice } from "@reduxjs/toolkit";

// Inital State
const initialState = {
  movies: [],
  movieDetails: null,
};

// Define the reducers
const moviesSlicer = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
  },
});

// Export the action (to set/change the state)
export const { setMovies, setMovieDetails } = moviesSlicer.actions;

// Export the reducers (state / store)
export default moviesSlicer.reducer;
