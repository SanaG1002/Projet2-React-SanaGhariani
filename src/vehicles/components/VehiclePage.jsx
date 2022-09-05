import React from "react";
import VehiclesService from "../service/VehicleService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Table  from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

const vehicleService = new VehiclesService();

const VehiclePage = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  const getVehicle = async () => {
    const vehicle = await vehicleService.getVehicleById(id);

    setData(vehicle);
  };

  useEffect(() => {
    getVehicle();
  }, []);

  return (
    <Container>
      <h2>Vehicule</h2>

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

export default VehiclePage;