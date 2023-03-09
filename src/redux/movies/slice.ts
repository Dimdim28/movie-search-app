import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "./asyncActions";
import { MoviesSliceState, Status } from "./types";

const initialState: MoviesSliceState = {
  movies: {
    Search: [],
    totalResults: "0",
    Response: "False",
  },
  status: Status.LOADING,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.movies = {
        Search: [],
        totalResults: "0",
        Response: "False",
        Error: action.error.message,
      };
    });
  },
});

export default moviesSlice.reducer;
