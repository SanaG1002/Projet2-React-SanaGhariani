import React from "react";
import StarshipService from "../service/StarshipService";
import StarshipList from "./StarshipList";
import useGetData from "../../useGetData";

const starshipService = new StarshipService();

const Starships = ({data}) => {
  const starships = useGetData(
    starshipService.getStarshipById.bind(starshipService),
    data?.starships
  );

  return <StarshipList starships={starships} />;
};

export default Starships;

