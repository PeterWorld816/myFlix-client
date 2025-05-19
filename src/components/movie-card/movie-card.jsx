// src/components/movie-card/movie-card.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from "react-bootstrap";


export function MovieCard({ movie, onClick }) {
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={movie.ImagePath}
        alt={`${movie.Title} poster`}
        className="w-100"
      />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Director?.Name}</Card.Text>

        <Button variant="link" onClick={() => onClick(movie)}>
          Open
        </Button>
      </Card.Body>
    </Card>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string,
    Director: PropTypes.shape({
      Name: PropTypes.string,
      Bio: PropTypes.string,
    }),
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
