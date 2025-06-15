import React from "react";
import "./MovieItem.css";
import { Link } from "react-router";

interface MovieItemProps {
  title: string;
  rating: number;
  type: string;
  imageUrl: string;
  id: string;
}

const MovieItem: React.FC<MovieItemProps> = ({
  title,
  rating,
  type,
  imageUrl,
  id,
}) => {
  return (
    <Link to={`/detail/${id}`}>
      <div className="movie-card">
        <div
          className="movie-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <span className="movie-type">{type}</span>

        <div className="movie-info">
          <h3 className="movie-title">{title}</h3>
          <div className="rating-container">
            <span className="star">★</span>
            <span className="rating">{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieItem;
