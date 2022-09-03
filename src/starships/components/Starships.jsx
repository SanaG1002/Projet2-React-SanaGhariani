import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import StarshipService from "../service/StarshipService";
import StarshipList from "./StarshipList";

const starshipService = new StarshipService();

const Starships = () => {
  const [data, setData] = useState([]);

  const getStarships = async () => {
    const starships = await starshipService.getStarships();

    setData(
      await Promise.all(
        starships.map((starship) =>
          starshipService.getStarshipWithReturnedUrl(starship.url)
        )
      )
    );
  };

  useEffect(() => {
    getStarships();
  }, []);

  return <StarshipList starships={data} />;
};

export default Starships;

