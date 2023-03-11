import { RootState } from "./../store";

export const selectMovies = (state: RootState) => state.movies.movies.Search;
export const selectTotalResults = (state: RootState) =>
  state.movies.movies.totalResults;
export const selectResponse = (state: RootState) =>
  state.movies.movies.Response;
export const selectError = (state: RootState) => state.movies.movies.Error;
export const selectStatus = (state: RootState) => state.movies.status;
export const selectPages = (state: RootState) =>
  Math.round(Number(state.movies.movies.totalResults) / 10);
export const selectCurrentPage = (state: RootState) => state.movies.currentPage;
export const selectSearch = (state: RootState) => state.movies.search;
