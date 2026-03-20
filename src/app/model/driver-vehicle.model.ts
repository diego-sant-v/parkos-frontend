import { TypeRegisterEnum } from "../enum/type-register-enum";

export interface DriverVehicleModel{
    UUID: string;
    name: string;
    email: string;
    document: string;
    mobilePhone: string;
    company: string;
    observation: string;
    typeRegister: TypeRegisterEnum;
    licensePlate: string;
}