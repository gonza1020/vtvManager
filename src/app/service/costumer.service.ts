import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Costumer} from '../model/Costumer';
import { environment } from 'src/environments/environment';
import { Person } from '../model/Person';

@Injectable({
  providedIn: 'root',
})
export class CostumerService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getCostumers(): Observable<Costumer[]> {
    return this.http.get<Costumer[]>(`${this.apiServerUrl}/costumer`);
  }

  public createCostumer(costumer: Person) {
    return this.http.post<Person>(
      `${this.apiServerUrl}/costumer`,
      costumer
    );
  }
  public updateCostumer() {}
  public deleteCostumer() {}
}
