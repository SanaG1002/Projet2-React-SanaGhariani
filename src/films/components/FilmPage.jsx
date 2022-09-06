import React from "react";
import FilmService from "../service/FilmService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Vehicles from "../../vehicles/components/Vehicles";
import Starships from "../../starships/components/Starships";
import Peoples from "../../peoples/components/Peoples";
import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";

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
      <h1>Film</h1>

      <Col  className="text-center mb-5">
        <h2 className="mb-5">{data.title}</h2>
        <p>{data.opening_crawl}</p>
      </Col>
       
      <Vehicles data={data} />

      <Starships data={data} />

      <Peoples data={data} />
    
    </Container>
  );
}

export default FilmPage;