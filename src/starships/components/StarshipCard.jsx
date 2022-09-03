import React from "react";
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const StarshipCard = ({ starship }) => {
  return (
    <Col className="my-3">
      <Card variant="link">
        <BCard.Header >{starship.name} - {starship.model}</BCard.Header>
        <BCard.Body>{starship.starship_class}</BCard.Body>
      </Card>
    </Col>
  );
};

export default StarshipCard;

