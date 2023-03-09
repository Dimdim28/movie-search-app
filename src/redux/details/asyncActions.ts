import axiosInstance from "@/services/instance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetDetailsParams } from "./types";
import { Details } from "./types";

export const fetchDetails = createAsyncThunk<Details, GetDetailsParams>(
  "details/getDetails",

  async (params) => {
    const { data } = await axiosInstance.get("", {
      params: { i: params.id },
    });
    if (data.Response === "True") return data;
    throw new Error(data.Error);
  }
);
