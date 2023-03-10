import Error from "@/components/common/Error";
import Loader from "@/components/common/Loader";
import { useAppDispatch, useAppSelector } from "@/hooks/appHooks";
import { fetchDetails } from "@/redux/details/asyncActions";
import { selectDetails, selectStatus } from "@/redux/details/selectors";
import { Status } from "@/redux/details/types";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./details-page.module.scss";

import StarRateIcon from "@mui/icons-material/StarRate";
import LanguageIcon from "@mui/icons-material/Language";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

const DetailsPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    Error: error,
    Title,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Poster,
    imdbRating,
    imdbVotes,
    Metascore,
    Type,
    DVD,
    BoxOffice,
    Ratings,
  } = useAppSelector(selectDetails);
  const status = useAppSelector(selectStatus);
  const { asPath, isReady } = router;
  useEffect(() => {
    if (isReady) {
      dispatch(fetchDetails({ id: asPath.replace("/details/", "") }));
    }
  }, [asPath, isReady]);

  if (status === Status.LOADING) return <Loader />;
  if (status === Status.ERROR)
    return (
      <Error
        text={error || "Error occured =("}
        callback={() => router.push("/")}
        label="back to list"
      />
    );

  return (
    <div className={styles.wrapper}>
      <div className={styles.general}>
        <h1>{Title}</h1>
        <p>
          <b>Rated:</b> {Rated}
        </p>
        <p>
          <b>Released:</b> {Released}
        </p>
        <p>
          <AccessTimeFilledIcon /> {Runtime}
        </p>
        <p>
          <b>Genre:</b> {Genre}
        </p>
        <p>
          <b>Director:</b> {Director}
        </p>
        <p>
          <b>Writer:</b> {Writer}
        </p>
        <p>
          <b>Actors:</b> {Actors}
        </p>
        <p>
          <b>Plot:</b> {Plot}
        </p>
        <p>
          <LanguageIcon /> {Language}
        </p>
        <p>
          <b>Country:</b> {Country}
        </p>
        <p>
          <b>Type:</b> {Type}
        </p>
        <p>
          <b>DVD:</b> {DVD}
        </p>
        <p>
          <AttachMoneyIcon /> {BoxOffice}
        </p>
      </div>
      <div className={styles.ratings}>
        <div className={styles.image}>
          <Image
            src={Poster !== "N/A" ? Poster : "/noimage.png"}
            alt={`${Title} image`}
            fill
            sizes="100%"
          />
        </div>
        {Ratings.map((el, id) => (
          <div className={styles.line} key={id}>
            <b>{el.Source}:</b>
            <Box height="100%">
              {el.Value}
              <StarRateIcon />
            </Box>
          </div>
        ))}
        <div className={styles.line}>
          <b>Metascore: </b>
          {Metascore}
        </div>
        <div className={styles.line}>
          <b>Awards: </b>
          {Awards}
        </div>
        <div className={styles.line}>
          <b>imdbRating: </b>
          {imdbRating}
        </div>

        <div className={styles.line}>
          <b>imdbVotes: </b>
          {imdbVotes}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
