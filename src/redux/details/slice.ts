import { createSlice } from "@reduxjs/toolkit";
import { fetchDetails } from "./asyncActions";
import { DetailsSliceState, Status } from "./types";

const initialState: DetailsSliceState = {
  details: {
    Title: "",
    Year: "",
    Rated: "",
    Released: "",
    Runtime: "",
    Genre: "",
    Director: "",
    Writer: "",
    Actors: "",
    Plot: "",
    Language: "",
    Country: "",
    Awards: "",
    Poster: "",
    Metascore: "",
    imdbRating: "",
    imdbVotes: "",
    imdbID: "",
    Type: "",
    DVD: "",
    BoxOffice: "",
    Production: "",
    Website: "",
    Response: "False",
  },
  status: Status.LOADING,
};

const detailsSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDetails.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchDetails.fulfilled, (state, action) => {
      state.details = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchDetails.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.details = {
        ...initialState.details,
        Error: action.error.message,
      };
    });
  },
});

export default detailsSlice.reducer;
