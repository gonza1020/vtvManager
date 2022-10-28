import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Inspector } from '../model/Inspector';
import { Person } from '../model/Person';

@Injectable({
  providedIn: 'root'
})
export class InspectorService {

  private apiServerUrl= `${environment.apiBaseUrl}/inspector`;

  constructor(private http: HttpClient) { }

  public getInspectors(): Observable<Inspector[]>{
    return this.http.get<Inspector[]>(`${this.apiServerUrl}`);
  }

  public saveInspector(inspector: Person){
    return this.http.post<Person>(this.apiServerUrl,inspector);
  }
  public getInspectorById(id: string){}
  public deleteInspector(id: string){}
  public updateInspector(id: string, inspector: Inspector){}
}
