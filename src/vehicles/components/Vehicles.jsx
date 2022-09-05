import React from "react";
import VehicleService from "../service/VehicleService";
import VehicleList from "./VehicleList";
import useGetData from "../../useGetData";
import Container from "react-bootstrap/Container";

const vehicleService = new VehicleService();

const Vehicles = ({data}) => {
  const vehicles = useGetData(
    vehicleService.getVehicleById.bind(vehicleService),
    data?.vehicles
  );

  return (
    <Container>
      <h2>Vehicules</h2>

      <VehicleList vehicles={vehicles} />
      
    </Container>
  );
};

export default Vehicles;