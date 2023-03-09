import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import moviesReducer from "./movies/slice";
import detailsReducer from "./details/slice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    details: detailsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
