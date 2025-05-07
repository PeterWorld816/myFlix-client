// src/components/main-view/main-view.jsx
import React, { useState, useEffect } from 'react';
import { MovieCard } from '../movie-card/movie-card.jsx';
import { MovieView } from '../movie-view/movie-view.jsx';

export default function MainView() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch('https://pacific-chamber-62418-85c232a9b2eb.herokuapp.com/movies')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();               // already an array
      })
      .then((data) => setMovies(data))    // no mapping needed
      .catch(console.error);
  }, []);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {movies.map((movie) => (
        <MovieCard
          key={movie._id}                // _id comes from your MongoDB model
          movie={movie}
          onClick={() => setSelectedMovie(movie)}
        />
      ))}
    </div>
  );
}
