import { VehicleDto } from "./VehicleDto";

export interface VehicleInspection{
    id: string,
    inspectionDate: string,
    expirationDate: string,
    inspectionState: string,
    costumerType: string,
    inspectorName: string,
    vehicleDto: VehicleDto

}