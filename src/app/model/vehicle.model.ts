import { CategoryEnum } from "../enum/category-enum";
import { FuelEnum } from "../enum/fuel-enum";
import { PreferredSectorEnum } from "../enum/preferred-sector-enum";
import { DriverVehicleModel } from "./driver-vehicle.model";

export interface VehicleModel{
    UUID: string;
    driverVehicle: DriverVehicleModel;
    carLicensePlate: string;
    color: string;
    model: string;
    mark: string;
    photoUrl: string;
    category: CategoryEnum;
    fuel: FuelEnum;
    preferredSector: PreferredSectorEnum;
    year: number;
}