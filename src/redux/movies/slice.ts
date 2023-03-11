import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "./asyncActions";
import { MoviesSliceState, Status } from "./types";

const initialState: MoviesSliceState = {
  movies: {
    Search: [],
    totalResults: "0",
    Response: "False",
  },
  search: "star",
  currentPage: 1,
  status: Status.LOADING,
  favorites: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.search = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    addFavorite(state, action) {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.imdbID !== action.payload
      );
    },
  },
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
      state.movies.Error = action.error.message;
    });
  },
});

export const { setSearchValue, setCurrentPage, addFavorite, removeFavorite } =
  moviesSlice.actions;

export default moviesSlice.reducer;
