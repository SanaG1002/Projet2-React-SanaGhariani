import React from "react";
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const PeopleCard = ({ people }) => {
  return (
    <Col className="my-3">
      <Card>
        <BCard.Header >{people.name}</BCard.Header>
        <BCard.Body>{people.birth_year}</BCard.Body>
      </Card>
    </Col>
  );
};

export default PeopleCard;


