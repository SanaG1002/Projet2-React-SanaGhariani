import React from "react";
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import PeopleService from "../service/PeopleService";

const peopleService = new PeopleService();

const PeopleCard = ({ people }) => {
  return (
    <Col >
      <Link to={`/peoples/${peopleService.getPeopleIdFromUrl(people.url)}`}>
        <Card>
          <BCard.Header >{people.name}</BCard.Header>
          <BCard.Body>{people.birth_year}</BCard.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default PeopleCard;