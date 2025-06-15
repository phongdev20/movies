import AxiosClient from "../config/AxiosClient";

export default {
  getList: (params?: any) => {
    const url = "/movie/popular";
    return AxiosClient.get(url, {
      params: params,
    });
  },
  getDetail: (movie_id: string) => {
    if (movie_id) {
      const url = `/movie/${movie_id}`;
      return AxiosClient.get(url);
    }
    return null;
  },
  getCreditsById: (movie_id: string) => {
    if (movie_id) {
      const url = `/movie/${movie_id}/credits`;
      return AxiosClient.get(url);
    }
    return null;
  },
  getSimilarById: (movie_id: string) => {
    if (movie_id) {
      const url = `/movie/${movie_id}/similar`;
      return AxiosClient.get(url);
    }
    return null;
  },

  getVideosById: (movie_id: string) => {
    if (movie_id) {
      const url = `/movie/${movie_id}/videos`;
      return AxiosClient.get(url);
    }
    return null;
  },
};
