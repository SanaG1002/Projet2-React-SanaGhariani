import React from 'react';
import StarshipCard from './StarshipCard';
import Row from "react-bootstrap/Row";

function StarshipList({ starships }) {
  return (
    <Row>
      {starships.map((starship) => (
        <StarshipCard key={starship.id} starship={starship} />
      ))}
    </Row>
  );
}

export default StarshipList;

