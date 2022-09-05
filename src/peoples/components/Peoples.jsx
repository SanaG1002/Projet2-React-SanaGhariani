import React from "react";
import PeopleService from "../service/PeopleService";
import PeopleList from "./PeopleList";
import useGetData from "../../useGetData";
import Container from "react-bootstrap/Container";

const peopleService = new PeopleService();

const Peoples = ({data}) => {
  const peoples = useGetData(
    peopleService.getPeopleById.bind(peopleService),
    data?.characters
  );

  return (
    <Container>
      <h2>Personnages</h2>

      <PeopleList peoples={peoples} />
      
    </Container>
  );
};

export default Peoples;