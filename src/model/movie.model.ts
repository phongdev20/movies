import { DOMAIN_IMAGE } from "../config/AxiosClient";
import type { Movie } from "../types/movie.type";

export const modelMovieList = (list: Movie[]) => {
  if (Array.isArray(list)) {
    return list.map((item: any) => {
      return {
        ...item,
        id: item.id,
        title: item.title,
        image: item.poster_path ? `${DOMAIN_IMAGE}/original${item.poster_path}`: null,
        rating: item.vote_average,
      };
    });
  }
  return [];
};
