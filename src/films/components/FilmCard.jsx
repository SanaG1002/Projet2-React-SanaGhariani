import React from "react";
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const FilmCard = ({ film }) => {
  return (
    <Col className="my-3">
      <Card variant="link">
        <BCard.Header >{film.title}</BCard.Header>
        <BCard.Body>{film.release_date}</BCard.Body>
      </Card>
    </Col>
  );
};

export default FilmCard;


