import React from 'react';
import VehicleCard from './VehicleCard';
import Row from "react-bootstrap/Row";

function VehicleList({ vehicles }) {
  return (
    <Row>
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.url} vehicle={vehicle} />
      ))}
    </Row>
  );
}

export default VehicleList;