import React from "react";
import FilmService from "../service/FilmService";
import FilmList from "./FilmList";
import useGetData from "../../useGetData";
import Container from "react-bootstrap/Container";

const filmService = new FilmService();

const Films = ({data}) => {
  const films = useGetData(
    filmService.getFilmById.bind(filmService),
    data?.films
  );

  return (
    <Container>
      <h2>Films</h2>

      <FilmList films={films} />
      
    </Container>
  );
};

export default Films;