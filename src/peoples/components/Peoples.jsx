import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PeopleService from "../service/PeopleService";
import PeopleList from "./PeopleList";

const peopleService = new PeopleService();

const Peoples = () => {
  const [data, setData] = useState([]);

  const getPeoples = async () => {
    const peoples = await peopleService.getPeoples();

    setData(
      await Promise.all(
        peoples.map((people) =>
          peopleService.getPeopleWithReturnedUrl(people.url)
        )
      )
    );
  };

  useEffect(() => {
    getPeoples();
  }, []);

  return <PeopleList peoples={data} />;
};

export default Peoples;