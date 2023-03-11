export type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export type Movies = {
  Search: Movie[] | [];
  totalResults: string;
  Response: "True" | "False";
  Error?: string;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface MoviesSliceState {
  status: Status;
  movies: Movies;
}

export type SearchMoviesParams = {
  title: string;
  page: number;
};
