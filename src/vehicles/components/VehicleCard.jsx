import React from "react";
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import VehiclesService from "../service/VehicleService";

const vehicleService = new VehiclesService();

const VehicleCard = ({ vehicle }) => {
  return (
    <Col className="my-3">
      <Link to={`/vehicles/${vehicleService.getVehicleIdFromUrl(vehicle.url)}`}>
        <Card>
          <BCard.Header > {vehicle.name} - {vehicle.model}</BCard.Header>
          <BCard.Body>{vehicle.manufacturer}</BCard.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default VehicleCard;