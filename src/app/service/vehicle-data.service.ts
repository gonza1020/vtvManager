import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VehicleData } from '../model/VehicleData';

@Injectable({
  providedIn: 'root',
})
export class VehicleDataService {
  private apiServerUrl = `${environment.apiBaseUrl}/vehicle-data`;

  constructor(private http: HttpClient) {}

  public getVehiclyType(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/vehicleType`);
  }

  // Buscar vehiculos por tipo
  public getBrands(type: any): Observable<string[]> {
    let paramsType = new HttpParams().append('vehicleType', type);
    console.log(paramsType);
    return this.http.get<string[]>(`${this.apiServerUrl}/vehicle-type`, {
      params: paramsType,
    });
  }

  //Buscar vehiculos por marca
  public getModels(brand: string): Observable<string[]> {
    let paramsBrand = new HttpParams().append('brand', brand);
    console.log(paramsBrand);
    return this.http.get<string[]>(`${this.apiServerUrl}/brand`, {
      params: paramsBrand,
    });
  }
}
