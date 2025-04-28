// src/components/movie-card/movie-card.jsx
import React from 'react';

export default function MovieCard({ movie, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: 200,
        cursor: 'pointer',
        boxShadow: '0 0 6px rgba(0,0,0,.2)',
        borderRadius: 8,
        overflow: 'hidden'
      }}
    >
      <img src={movie.ImagePath} alt={movie.Title} style={{ width: '100%', height: 300, objectFit: 'cover' }} />
      <div style={{ padding: 10, fontWeight: 600, textAlign: 'center' }}>{movie.Title}</div>
    </div>
  );
}
