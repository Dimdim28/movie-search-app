import { RootState } from "./../store";

export const selectDetails = (state: RootState) => state.details.details;
export const selectStatus = (state: RootState) => state.details.status;
