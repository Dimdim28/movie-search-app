import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Movie } from "@/redux/movies/types";
import styles from "./MovieCard.module.scss";

const MovieCard: React.FC<Movie> = ({ Title, Year, imdbID, Type, Poster }) => {
  const router = useRouter();
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
      />
      <div className={styles.info}>
        <h1>{Title}</h1>
        <b className={styles.year}>{Year}</b>
        <b className={styles.type}>{Type}</b>
      </div>
    </div>
  );
};

export default MovieCard;
