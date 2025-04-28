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
      ImagePath: 'https://i.ytimg.com/vi/isOGD_7hNIY/maxresdefault.jpg',
      Genre: { Name: 'Thriller' },
      Director: { Name: 'Bong Joon-ho', Bio: 'South-Korean director …' }
    },
    {
      _id: '2',
      Title: 'Snowpiercer',
      Description: 'A train circles the frozen Earth…',
      ImagePath: 'https://dyn.media.titanbooks.com/Y8pSRAuu6GvGel8YSQv-A_TKcOI=/fit-in/600x600/filters:format(webp)/https://media.titanbooks.com/catalog/products/Snowpiercer.jpg',
      Genre: { Name: 'Sci-Fi' },
      Director: { Name: 'Bong Joon-ho', Bio: 'South-Korean director …' }
    },
    {
      _id: '3',
      Title: 'Oldboy',
      Description: 'A man is kidnapped and imprisoned…',
      ImagePath: 'https://snworksceo.imgix.net/dtc/9d1eb32c-94dd-4d2a-a7db-8448e144c8f4.sized-1000x1000.jpg?w=1000',
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
