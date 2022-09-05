import React from "react";
import StarshipService from "../service/StarshipService";
import StarshipList from "./StarshipList";
import useGetData from "../../useGetData";
import Container from "react-bootstrap/Container";

const starshipService = new StarshipService();

const Starships = ({data}) => {
  const starships = useGetData(
    starshipService.getStarshipById.bind(starshipService),
    data?.starships
  );

  return (
    <Container>
      <h2>Vaisseaux spatiaux</h2>

      <StarshipList starships={starships} />
      
    </Container>
  );
};

export default Starships;

