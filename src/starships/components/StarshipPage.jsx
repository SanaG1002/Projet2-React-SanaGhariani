import React from "react";
import StarshipService from "../service/StarshipService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Table  from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

const starshipService = new StarshipService();

const StarshipPage = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  const getStarship = async () => {
    const starship = await starshipService.getStarshipById(id);

    setData(starship);
  };

  useEffect(() => {
    getStarship();
  }, []);

  return (
    <Container>
      <h2>Vaisseau spatial</h2>

      <Table>
          <tbody>
          <tr>
            <td>{data.name}</td>
            <td>{data.model}</td>
          </tr>
          <tr>
            <td>{data.manufacturer}</td>
            <td>{data.cost_in_credits}</td>
          </tr>
          <tr>
            <td>{data.length}</td>
            <td>{data.max_atmosphering_speed}</td>
          </tr>
          <tr>
            <td>{data.crew}</td>
            <td>{data.passengers}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default StarshipPage;