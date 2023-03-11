import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Movie } from "@/redux/movies/types";
import styles from "./MovieCard.module.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CancelIcon from "@mui/icons-material/Cancel";
import { useAppDispatch } from "@/hooks/appHooks";
import { addFavorite, removeFavorite } from "@/redux/movies/slice";

const MovieCard: React.FC<Movie & { isFavorite: boolean }> = ({
  Title,
  Year,
  imdbID,
  Type,
  Poster,
  isFavorite,
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  return (
    <div
      className={styles.card}
      onClick={() => {
        router.push(`details/${imdbID}`);
      }}
    >
      <Image
        className={styles.image}
        src={Poster !== "N/A" ? Poster : "/noimage.png"}
        alt={`${Title} image`}
        fill
        sizes="100%"
        priority
      />
      <div className={styles.info}>
        <h2>{Title}</h2>
        {isFavorite ? (
          <CancelIcon
            className={styles.remove}
            onClick={(e) => {
              e.stopPropagation();
              dispatch(removeFavorite(imdbID));
            }}
          />
        ) : (
          <FavoriteIcon
            className={styles.add}
            onClick={(e) => {
              e.stopPropagation();
              dispatch(
                addFavorite({
                  Title,
                  Year,
                  imdbID,
                  Type,
                  Poster,
                  isFavorite: true,
                })
              );
            }}
          />
        )}
        <b className={styles.year}>{Year}</b>
        <b className={styles.type}>{Type}</b>
      </div>
    </div>
  );
};

export default MovieCard;
