import React from "react";
import PeopleService from "../service/PeopleService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Table  from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

const peopleService = new PeopleService();

const PeoplePage = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  const getPeople = async () => {
    const people = await peopleService.getPeopleById(id);

    setData(people);
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <Container>
      <h2>Personnage</h2>

      <Table>
        <tbody>
          <tr>
            <td>{data.name}</td>
            <td>{data.birth_year}</td>
          </tr>
          <tr>
            <td>{data.height}</td>
            <td>{data.mass}</td>
          </tr>
          <tr>
            <td>{data.hair_color}</td>
            <td>{data.skin_color}</td>
          </tr>
          <tr>
            <td>{data.gender}</td>
            <td>{data.eye_color}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default PeoplePage;