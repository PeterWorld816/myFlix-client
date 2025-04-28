// src/components/main-view/main-view.jsx
import React, { useState } from 'react';
import MovieCard from '../movie-card/movie-card.jsx';
import MovieView from '../movie-view/movie-view.jsx';

export default function MainView() {
  // 1 ≥ requirement: at least 3 movies
  const [movies] = useState([
    {
      _id: '1',
      Title: 'Parasite',
      Description: 'Greed and class discrimination…',
      ImagePath: 'https://m.media-amazon.com/images/I/71cXr3trkIL._AC_UF894,1000_QL80_.jpg',
      Genre: { Name: 'Thriller' },
      Director: { Name: 'Bong Joon-ho', Bio: 'South-Korean director …' }
    },
    {
      _id: '2',
      Title: 'Snowpiercer',
      Description: 'A train circles the frozen Earth…',
      ImagePath: 'https://m.media-amazon.com/images/I/81X1+P0JQ5L._AC_SY741_.jpg',
      Genre: { Name: 'Sci-Fi' },
      Director: { Name: 'Bong Joon-ho', Bio: 'South-Korean director …' }
    },
    {
      _id: '3',
      Title: 'Oldboy',
      Description: 'A man is kidnapped and imprisoned…',
      ImagePath: 'https://m.media-amazon.com/images/I/51G1E9K9D9L._AC_.jpg',
      Genre: { Name: 'Neo-Noir' },
      Director: { Name: 'Park Chan-wook', Bio: 'South-Korean director …' }
    }
  ]);

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
