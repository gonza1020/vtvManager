import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VehicleInspection } from '../model/VehicleInspection';

@Injectable({
  providedIn: 'root'
})
export class VehicleInspectionService {
  
  private apiServerUrl= `${environment.apiBaseUrl}/vehicle-inspection`;

  constructor(private http: HttpClient) { }

  public getVehicleInspection(): Observable<VehicleInspection[]>{
    return this.http.get<VehicleInspection[]>(`${this.apiServerUrl}`);
  }
  public getVehicleInspectionById(id: string): Observable<VehicleInspection>{
    return this.http.get<VehicleInspection>(`${this.apiServerUrl}/${id}`);
  }

  public updateVehicleInspection(){}
  public deleteVehicleInspection(){}
}
