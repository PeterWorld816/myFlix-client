// src/components/movie-card/movie-card.jsx
import React from 'react';
// Here you import the PropTypes library
import PropTypes from "prop-types";


// The BookCard function component 
export const MovieCard = ({ movie, onMovieClick }) => {
  console.log(movie);
  return (
      <Card className="h-100">
          <Card.Img variant="top" src={movie.imagePath} className="w-100" />
          <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.director.name}</Card.Text>
              <Button onClick={() => onMovieClick(movie)} variant="link">
                  Open
              </Button>
          </Card.Body>
      </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};


