import { useEffect, useState, useRef } from "react";
import "./MovieDetail.css";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import movieApi from "../../api/movie.api";
import MovieItem from "../../components/MovieItem/MovieItem";
import type { Cast, Movie, Video } from "../../types/movie.type";
import { modelMovieList } from "../../model/movie.model";

const IMG_URL = "https://image.tmdb.org/t/p/w500";
const BACKDROP_URL = "https://image.tmdb.org/t/p/original";

export default function MovieDetail() {
  const { id } = useParams();
  const castListRef = useRef<HTMLDivElement>(null);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);

  const handleScroll = () => {
    if (castListRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = castListRef.current;
      setShowPrevButton(scrollLeft > 0);
      setShowNextButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "prev" | "next") => {
    if (castListRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        direction === "prev"
          ? castListRef.current.scrollLeft - scrollAmount
          : castListRef.current.scrollLeft + scrollAmount;

      castListRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const castList = castListRef.current;
    if (castList) {
      castList.addEventListener("scroll", handleScroll);
      handleScroll(); // Check initial state
      return () => castList.removeEventListener("scroll", handleScroll);
    }
  }, []);

  console.log("id", id);

  const { data: dataDetail } = useQuery<any>({
    queryKey: ["movieDetail", id],
    queryFn: () => movieApi.getDetail(id ?? ""),
  });
  const { data: dataCredits } = useQuery<any>({
    queryKey: ["movieCredits", id],
    queryFn: () => movieApi.getCreditsById(id ?? ""),
  });
  const { data: dataSimilar } = useQuery<any>({
    queryKey: ["movieSimilar", id],
    queryFn: () => movieApi.getSimilarById(id ?? ""),
  });
  const { data: dataVideo } = useQuery<any>({
    queryKey: ["movieVideos", id],
    queryFn: () => movieApi.getVideosById(id ?? ""),
  });
  console.log("dataVideo", dataVideo);

  const movie = dataDetail?.data ?? {};
  const cast = Array.isArray(dataCredits?.data?.cast)
    ? dataCredits.data.cast
    : [];
  const similar = modelMovieList(
    Array.isArray(dataSimilar?.data?.results) ? dataSimilar.data.results : []
  );
  const trailer: Video = dataVideo?.data?.results?.[0] ?? {};

  console.log("trailer", trailer);

  if (!movie) return <div className="loading">Loading...</div>;

  return (
    <div className="movie-detail">
      {movie && Object.keys(movie).length > 0 && (
        <div
          className="backdrop"
          style={{
            backgroundImage: `url(${BACKDROP_URL}${movie.backdrop_path})`,
          }}
        >
          <div className="overlay">
            <div className="poster">
              <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.title} />
              <button className="watch-button" onClick={() => window.open(`https://www.youtube.com/watch?v=${trailer.key}`, '_blank')}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Watch Movie
              </button>
            </div>
            <div className="info">
              <h1>
                {movie.title} ({new Date(movie.release_date).getFullYear()})
              </h1>
              <p className="tagline">{movie.tagline}</p>
              <p className="overview">{movie.overview}</p>
              <ul>
                <li>
                  <strong>Genres:</strong>{" "}
                  {movie.genres?.map((g: any) => g.name).join(", ")}
                </li>
                <li>
                  <strong>Runtime:</strong> {movie.runtime} mins
                </li>
                <li>
                  <strong>Language:</strong>{" "}
                  {movie.original_language?.toUpperCase()}
                </li>
                <li>
                  <strong>Status:</strong> {movie.status}
                </li>
                <li>
                  <strong>Rating:</strong> ⭐ {movie.vote_average?.toFixed(1)}
                </li>
                <li>
                  <strong>Budget:</strong> $
                  {Number(movie.budget)?.toLocaleString()}
                </li>
                <li>
                  <strong>Revenue:</strong> $
                  {Number(movie.revenue)?.toLocaleString()}
                </li>
                <li>
                  <strong>Companies:</strong>{" "}
                  {movie.production_companies
                    ?.map((c: any) => c.name)
                    .join(", ")}
                </li>
                <li>
                  <strong>Countries:</strong>{" "}
                  {movie.production_countries
                    ?.map((c: any) => c.name)
                    .join(", ")}
                </li>
              </ul>
              {trailer && (
                <div className="trailer">
                  <h3>Trailer</h3>
                  <iframe
                    src={`https://www.youtube.com/embed/${trailer.key}`}
                    title={trailer.name}
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {cast && cast.length > 0 && (
        <div className="section">
          <h2>Top Cast</h2>
          <button
            className="nav-button prev"
            onClick={() => scroll("prev")}
            disabled={!showPrevButton}
          >
            ←
          </button>
          <div className="cast-list" ref={castListRef}>
            {cast?.map((c: Cast, i: number) => (
              <div key={i} className="cast-card">
                <img src={`${IMG_URL}${c.profile_path}`} alt={c.name} />
                <p>
                  <strong>{c.name}</strong>
                  <br />
                  as {c.character}
                </p>
              </div>
            ))}
          </div>
          <button
            className="nav-button next"
            onClick={() => scroll("next")}
            disabled={!showNextButton}
          >
            →
          </button>
        </div>
      )}

      {similar.length > 0 && (
        <div className="section">
          <h2>Similar Movies</h2>
          <div className="similar-list">
            {similar.map((movie: Movie) => (
              <MovieItem
                title={movie.title}
                imageUrl={movie.image ?? ""}
                rating={movie.rating}
                key={movie.id}
                id={movie.id.toString()}
                type={new Date(movie.release_date).getFullYear().toString()}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
