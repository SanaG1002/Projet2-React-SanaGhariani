import React from "react";
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import StarshipService from "../service/StarshipService";

const starshipService = new StarshipService();

const StarshipCard = ({ starship }) => {
  return (
    <Col className="my-3">
      <Link to={`/starships/${starshipService.getStarshipIdFromUrl(starship.url)}`}>
        <Card variant="link">
          <BCard.Header >{starship.name} - {starship.model}</BCard.Header>
          <BCard.Body>{starship.starship_class}</BCard.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default StarshipCard;