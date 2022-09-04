import React from "react";
import VehicleService from "../service/VehicleService";
import VehicleList from "./VehicleList";
import useGetData from "../../useGetData";

const vehicleService = new VehicleService();

const Vehicles = ({data}) => {
  const vehicles = useGetData(
    vehicleService.getVehicleById.bind(vehicleService),
    data?.vehicles
  );

  return <VehicleList vehicles={vehicles} />
};

export default Vehicles;