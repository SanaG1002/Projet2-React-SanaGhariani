import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import FilmService from "../service/FilmService";
import FilmList from "./FilmList";
import Container from "react-bootstrap/Container";

const filmService = new FilmService();

const FilmsPage = () => {
  const [data, setData] = useState([]);

  const getFilms = async () => {
    const films = await filmService.getFilms();

    setData(
      await Promise.all(
        films.map((film) =>
          filmService.getFilmWithReturnedUrl(film.url)
        )
      )
    );
  };

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <Container>
      <h2>Films</h2>

      <FilmList films={data} />
      
    </Container>
  );
};

export default FilmsPage;