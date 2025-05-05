// src/components/main-view/main-view.jsx
import React, { useState } from 'react';
import MovieCard from '../movie-card/movie-card.jsx';
import MovieView from '../movie-view/movie-view.jsx';

export default function MainView() {
  // 1 ≥ requirement: at least 3 movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings")
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.docs.map((doc) => {
          return {
            id: doc.key,
            title: doc.title,
            image:`https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`,
            author: doc.author_name?.[0]
          };
        });

        setMovies(moviesFromApi);
      });
  }, []);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie)
    return <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />;

  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {movies.map(movie => (
        <MovieCard key={movie._id} movie={movie} onClick={() => setSelectedMovie(movie)} />
      ))}
    </div>
  );
}
