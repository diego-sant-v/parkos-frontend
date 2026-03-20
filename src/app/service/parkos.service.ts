import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { VehicleModel } from "../model/vehicle.model";

@Injectable()
export class ParkOsService{
    url: string = "http://localhost:8080/parking";
    constructor(private httpClient: HttpClient){}

    registerVehicle(vehicle: VehicleModel):Observable<VehicleModel>{
        return this.httpClient.post<VehicleModel>(this.url + "/park", vehicle);
    }

    findAllVehicles():Observable<VehicleModel>{
        return this.httpClient.get<VehicleModel>(this.url + "/findAll");
    }
}