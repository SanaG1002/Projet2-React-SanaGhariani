import React from 'react';
import FilmCard from './FilmCard';
import Row from "react-bootstrap/Row";

function FilmList({ films }) {
  return (
    <Row>
      {films.map((film) => (
        <FilmCard key={film.url} film={film} />
      ))}
    </Row>
  );
}

export default FilmList;