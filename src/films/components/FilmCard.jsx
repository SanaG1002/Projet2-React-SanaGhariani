import React from "react";
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import FilmService from "../service/FilmService";

const filmService = new FilmService();

const FilmCard = ({ film }) => {
  return (
    <Col className="my-3">
      <Link to={`/films/${filmService.getFilmIdFromUrl(film.url)}`}>
        <Card >
          <BCard.Header >{film.title}</BCard.Header>
          <BCard.Body>{film.release_date}</BCard.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default FilmCard;


