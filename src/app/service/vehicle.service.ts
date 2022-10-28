import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehicle } from '../model/Vehicle';
import { VehicleDto } from '../model/VehicleDto';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiServerUrl = `${environment.apiBaseUrl}/vehicle`;

  constructor(private http: HttpClient) { }

  public getVehicles(): Observable<VehicleDto[]>{
      return this.http.get<VehicleDto[]>(`${this.apiServerUrl}`);
  }
  public getVehicleByLicensePlate(licensePlate: string): Observable<VehicleDto>{
    return this.http.get<VehicleDto>(`${this.apiServerUrl}/licensePlate?licensePlate=${licensePlate}`);
  }
  public createVehicle(vehicle: Vehicle){
    return this.http.post<Vehicle>(this.apiServerUrl,vehicle);
  }
  public updateVehicle(id: string, vehicle: Vehicle){}
  public deleteVehicle(id: string){}
}
