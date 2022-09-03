import React from "react";
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const VehicleCard = ({ vehicle }) => {
  return (
    <Col className="my-3">
      <Card>
        <BCard.Header > {vehicle.name} - {vehicle.model}</BCard.Header>
        <BCard.Body>{vehicle.manufacturer}</BCard.Body>
      </Card>
    </Col>
  );
};

export default VehicleCard;