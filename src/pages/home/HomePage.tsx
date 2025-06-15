import "./HomePage.css";
import MovieItem from "../../components/MovieItem/MovieItem";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";
import { useQuery } from "@tanstack/react-query";
import movieApi from "../../api/movie.api";
import { modelMovieList } from "../../model/movie.model";
import type { Movie } from "../../types/movie.type";

const HomePage = () => {
  const { data } = useQuery<any>({
    queryKey: ["movieList"],
    queryFn: () => movieApi.getList(),
  });
  const initData = data?.data?.results ?? [];

  const hotMovies = modelMovieList(initData);

  return (
    <div className="home-page">
      <section className="hot-movies">
        <MovieCarousel movies={hotMovies} />
      </section>

      <section className="featured-movies">
        <h2>Featured Movies</h2>
        <div className="movie-grid">
          {hotMovies.map((movie: Movie) => (
            <MovieItem
              title={movie.title}
              imageUrl={movie.image}
              rating={movie.rating}
              key={movie.id}
              id={movie.id.toString()}
              type={new Date(movie.release_date).getFullYear().toString()}
            />
          ))}
        </div>
      </section>

      <section className="popular-movies">
        <h2>Popular Movies</h2>
        <div className="movie-grid">
          {hotMovies.map((movie: Movie) => (
            <MovieItem
              title={movie.title}
              imageUrl={movie.image}
              rating={movie.rating}
              key={movie.id}
              id={movie.id.toString()}
              type={new Date(movie.release_date).getFullYear().toString()}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
