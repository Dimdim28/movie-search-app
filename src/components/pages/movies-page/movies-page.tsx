import { useAppDispatch, useAppSelector } from "@/hooks/appHooks";
import { fetchMovies } from "@/redux/movies/asyncActions";
import { selectMovies, selectStatus } from "@/redux/movies/selectors";
import { Status } from "@/redux/movies/types";
import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import MovieCard from "./components/MovieCard";
import styles from "./movies-page.module.scss";

const MoviesPage = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(selectMovies);
  const status = useAppSelector(selectStatus);
  useEffect(() => {
    dispatch(fetchMovies({ title: "avatar" }));
  }, []);

  if (status === Status.LOADING) return <div>Loading...</div>;
  if (status === Status.ERROR) return <div>error</div>;
  return (
    <Grid
      container
      spacing={2}
      className={styles.movies}
      columns={{ xs: 4, sm: 9, md: 12, lg: 15, xl: 18 }}
    >
      {movies.map((movie, id) => (
        <Grid item key={id} xs={2} sm={3}>
          <MovieCard {...movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MoviesPage;
