import React from "react";
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import FilmService from "../service/FilmService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Vehicles from "../../vehicles/components/Vehicles";
import Starships from "../../starships/components/Starships";
import Peoples from "../../peoples/components/Peoples";
import Container from "react-bootstrap/Container";

const filmService = new FilmService();

const FilmPage = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  const getFilm = async () => {
    const film = await filmService.getFilmById(id);

    setData(film);
  };

  useEffect(() => {
    getFilm();
  }, []);

  return (
    <Container>
      <h2>Film</h2>
      
      <Card>
        <BCard.Header >{id}</BCard.Header>
        <BCard.Header >{data.title}</BCard.Header>
        <BCard.Body>{data.opening_crawl}</BCard.Body>
        <BCard.Body>{data.director}</BCard.Body>
        <BCard.Body>{data.producer}</BCard.Body>
        <BCard.Body>{data.release_date}</BCard.Body>
        <BCard.Body>{data.release_date}</BCard.Body>
      </Card>

      <Vehicles data={data} />

      <Starships data={data} />

      <Peoples data={data} />

    </Container>
  );
}

export default FilmPage;