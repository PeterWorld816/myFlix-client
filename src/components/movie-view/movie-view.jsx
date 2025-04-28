// src/components/movie-view/movie-view.jsx
import React from 'react';

export default function MovieView({ movie, onBackClick }) {
  return (
    <div style={{ maxWidth: 700, margin: '30px auto', fontFamily: 'sans-serif' }}>
      <button onClick={onBackClick} style={{ marginBottom: 20 }}>← Back</button>
      <h2>{movie.Title}</h2>
      <img src={movie.ImagePath} alt={movie.Title} style={{ width: '100%', maxHeight: 400, objectFit: 'cover' }} />
      <p style={{ marginTop: 15 }}>{movie.Description}</p>

      <h3>Genre</h3>
      <p>{movie.Genre?.Name}</p>

      <h3>Director</h3>
      <p><strong>{movie.Director?.Name}</strong></p>
      <p>{movie.Director?.Bio}</p>
    </div>
  );
}
