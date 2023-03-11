import { Movie } from "@/redux/movies/types";

export const putFavoritesToLocalStorage = (items: Movie[]) => {
  localStorage.setItem("favorites-movies", JSON.stringify(items));
};

export const getFavoritesFromLocalStorage = () => {
  const item = localStorage.getItem("favorites-movies");
  return item ? JSON.parse(item) : [];
};
