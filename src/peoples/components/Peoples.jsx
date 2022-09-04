import React from "react";
import PeopleService from "../service/PeopleService";
import PeopleList from "./PeopleList";
import useGetData from "../../useGetData";

const peopleService = new PeopleService();

const Peoples = ({data}) => {
  const peoples = useGetData(
    peopleService.getPeopleById.bind(peopleService),
    data?.characters
  );

  return <PeopleList peoples={peoples} />;
};

export default Peoples;