import Error from "@/components/common/Error";
import Loader from "@/components/common/Loader";
import { useAppDispatch, useAppSelector } from "@/hooks/appHooks";
import { fetchMovies } from "@/redux/movies/asyncActions";
import {
  selectCurrentPage,
  selectError,
  selectFavorites,
  selectMovies,
  selectPages,
  selectSearch,
  selectStatus,
} from "@/redux/movies/selectors";
import { Status } from "@/redux/movies/types";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navigation from "./components/Navigation";
import CustomizedInputBase from "./components/CustomInput/CustomInput";
import MovieCard from "./components/MovieCard";
import styles from "./movies-page.module.scss";
import { getFavoritesFromLocalStorage } from "@/utils/localStorage";
import { setFavorites } from "@/redux/movies/slice";

const MoviesPage = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(selectMovies);
  const status = useAppSelector(selectStatus);
  const error = useAppSelector(selectError);
  const searchFromRedux = useSelector(selectSearch);
  const currentPageFromRedux = useSelector(selectCurrentPage);
  const favorites = useSelector(selectFavorites);
  const [search, setSearch] = React.useState<string>(searchFromRedux);
  const [isActive, setIsActive] = React.useState<boolean>(true);
  const totalPages = useSelector(selectPages);
  const [currentPage, setCurrentPage] = useState(currentPageFromRedux);

  useEffect(() => {
    dispatch(setFavorites());
  }, []);

  useEffect(() => {
    if (isActive) {
      dispatch(fetchMovies({ title: search, page: currentPage }));
      setIsActive(false);
    }
  }, [dispatch, isActive, search, currentPage]);
  if (status === Status.LOADING) return <Loader />;
  if (status === Status.ERROR)
    return (
      <Error
        text={error || "Error occured =("}
        setIsActive={setIsActive}
        label="back"
      />
    );

  return (
    <Container>
      <div className={styles.search}>
        <CustomizedInputBase
          setIsActive={setIsActive}
          setSearch={setSearch}
          search={search}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <Grid
        container
        columnSpacing={1}
        className={styles.movies}
        columns={{ xs: 4, sm: 9, md: 12, lg: 15, xl: 18 }}
      >
        <Grid item xs={4} sm={9} md={12} lg={15} xl={18}>
          <div className={styles.title}>
            <h1>Movies</h1>
          </div>
        </Grid>
        {movies.map((movie, id) => (
          <Grid item key={id} xs={2} sm={3} className={styles.card}>
            <MovieCard
              isFavorite={
                favorites.findIndex((el) => el.imdbID === movie.imdbID) > -1
              }
              {...movie}
            />
          </Grid>
        ))}
        <Grid item xs={4} sm={9} md={12} lg={15} xl={18}>
          <div className={styles.title}>
            <h1>Favorites</h1>
          </div>
        </Grid>
        {favorites.length > 0 ? (
          favorites.map((movie, id) => (
            <Grid item key={id} xs={2} sm={3} className={styles.card}>
              <MovieCard isFavorite={true} {...movie} />
            </Grid>
          ))
        ) : (
          <Grid item xs={4} sm={9} md={12} lg={15} xl={18}>
            <div className={styles.title}>
              <p>Nothing to show =( Click on heart to add movie to favorite</p>
            </div>
          </Grid>
        )}
      </Grid>
      <Navigation
        total={totalPages}
        current={currentPage}
        setCurrent={setCurrentPage}
        setIsActive={setIsActive}
      />
    </Container>
  );
};

export default MoviesPage;
