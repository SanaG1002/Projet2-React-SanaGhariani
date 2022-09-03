import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import VehicleService from "../service/VehicleService";
import VehicleList from "./VehicleList";

const vehicleService = new VehicleService();

const Vehicles = () => {
  const [data, setData] = useState([]);

  const getVehicles = async () => {
    const vehicles = await vehicleService.getVehicles();

    setData(
      await Promise.all(
        vehicles.map((vehicle) =>
          vehicleService.getVehicleWithReturnedUrl(vehicle.url)
        )
      )
    );
  };

  useEffect(() => {
    getVehicles();
  }, []);

  return <VehicleList vehicles={data} />;
};

export default Vehicles;