import React, { useState, useEffect } from "react";
import "./MovieCarousel.css";
import { Link } from "react-router";

interface Movie {
  id: number;
  title: string;
  image: string;
  rating: number;
}

interface MovieCarouselProps {
  movies: Movie[];
  onWatchMovie?: (movieId: number) => void;
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({
  movies,
  onWatchMovie,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 50000);

    return () => clearInterval(interval);
  }, [movies.length]);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + movies.length) % movies.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const handleWatchMovie = (movieId: number) => {
    if (onWatchMovie) {
      onWatchMovie(movieId);
    }
  };

  return (
    <div className="movie-carousel">
      <button className="carousel-button prev" onClick={handlePrev}>
        &lt;
      </button>
      <div className="carousel-container">
        {movies.map((movie, index) => (
          <Link to={`/detail/${movie.id}`}>
            <div
              key={movie.id}
              className={`carousel-item ${
                index === currentIndex ? "active" : ""
              }`}
              style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`,
              }}
            >
              <div className="movie-slide">
                <div className="movie-image">
                  <img src={movie.image} alt={movie.title} />
                  <div className="movie-overlay">
                    <div className="movie-content">
                      <h2 className="movie-title">{movie.title}</h2>
                      <div className="movie-rating">
                        <span className="rating-label">Rating:</span>
                        <span className="rating-value">
                          {movie.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>
                    <div className="watch-button-container">
                      <button
                        className="watch-button"
                        onClick={() => handleWatchMovie(movie.id)}
                      >
                        Watch Movie
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <button className="carousel-button next" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default MovieCarousel;
