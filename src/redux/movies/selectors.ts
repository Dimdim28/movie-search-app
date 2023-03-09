import { RootState } from "./../store";

export const selectMovies = (state: RootState) => state.movies.movies.Search;
export const selectTotalResults = (state: RootState) =>
  state.movies.movies.totalResults;
export const selectResponse = (state: RootState) =>
  state.movies.movies.Response;
export const selectError = (state: RootState) => state.movies.movies.Error;
export const selectStatus = (state: RootState) => state.movies.status;
