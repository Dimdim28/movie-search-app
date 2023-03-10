import axiosInstance from "@/services/instance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SearchMoviesParams } from "./types";
import { Movies } from "./types";

export const fetchMovies = createAsyncThunk<Movies, SearchMoviesParams>(
  "movies/fetchMovies",

  async (params) => {
    const title = decodeURI(params.title.trim());
    console.log(title);
    const { data } = await axiosInstance.get("", {
      params: { s: title },
    });
    if (data.Response === "True") {
      console.log("success");
      return data;
    } else {
      throw new Error(data.Error);
    }
  }
);
