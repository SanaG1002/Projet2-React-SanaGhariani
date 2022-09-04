import React from "react";
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import FilmService from "../service/FilmService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const filmService = new FilmService();

const FilmPage = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  const getFilm = async () => {
    const filmUrl = filmService.getFilmUrlFromId(id);
    const film = await filmService.getFilmWithReturnedUrl(filmUrl);

    setData(film);
  };

  useEffect(() => {
    getFilm();
  }, []);

  return (
    <Card>
      <BCard.Header >{id}</BCard.Header>
      <BCard.Header >{data.title}</BCard.Header>
      <BCard.Body>{data.opening_crawl}</BCard.Body>
      <BCard.Body>{data.director}</BCard.Body>
      <BCard.Body>{data.producer}</BCard.Body>
      <BCard.Body>{data.release_date}</BCard.Body>
    </Card>
  );
}

export default FilmPage;
