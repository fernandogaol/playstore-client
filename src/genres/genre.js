import React from 'react';
import './genre.css';

export default function Genre(props) {
  return (
    <div className="apps">
      <h2>{props.App}</h2>
      <div className="app_category">Category: {props.Category}</div>
      <div className="app_rating">Rating: {props.Rating}</div>
      <div className="app_genres">Genres: {props.Genres}</div>
    </div>
  );
}
