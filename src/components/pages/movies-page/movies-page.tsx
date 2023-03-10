import Error from "@/components/common/Error";
import Loader from "@/components/common/Loader";
import { useAppDispatch, useAppSelector } from "@/hooks/appHooks";
import { fetchMovies } from "@/redux/movies/asyncActions";
import {
  selectError,
  selectMovies,
  selectStatus,
} from "@/redux/movies/selectors";
import { Status } from "@/redux/movies/types";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import CustomizedInputBase from "./components/CustomInput/CustomInput";
import MovieCard from "./components/MovieCard";
import styles from "./movies-page.module.scss";

const MoviesPage = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(selectMovies);
  const status = useAppSelector(selectStatus);
  const error = useAppSelector(selectError);
  const [search, setSearch] = React.useState<string>("star");
  const [isActive, setIsActive] = React.useState<boolean>(true);
  useEffect(() => {
    if (isActive) {
      dispatch(fetchMovies({ title: search }));
      setIsActive(false);
    }
  }, [dispatch, isActive, search]);

  if (status === Status.LOADING) return <Loader />;
  if (status === Status.ERROR)
    return <Error text={error || ""} setIsActive={setIsActive} />;

  return (
    <Container>
      <Grid
        container
        spacing={2}
        className={styles.movies}
        columns={{ xs: 4, sm: 9, md: 12, lg: 15, xl: 18 }}
      >
        <Grid
          item
          xs={4}
          sm={9}
          md={12}
          lg={15}
          xl={18}
          className={styles.search}
        >
          <CustomizedInputBase
            setIsActive={setIsActive}
            setSearch={setSearch}
            search={search}
          />
        </Grid>
        {movies.map((movie, id) => (
          <Grid
            item
            key={id}
            xs={2}
            sm={3}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MovieCard {...movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MoviesPage;
