import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import FilmService from "../service/FilmService";
import FilmList from "./FilmList";

const filmService = new FilmService();

const Films = () => {
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

  return <FilmList films={data} />;
};

export default Films;