import React from 'react';
import PeopleCard from './PeopleCard';
import Row from "react-bootstrap/Row";

function PeopleList({ peoples }) {
  return (
    <Row>
      {peoples.map((people) => (
        <PeopleCard key={people.url} people={people} />
      ))}
    </Row>
  );
}

export default PeopleList;