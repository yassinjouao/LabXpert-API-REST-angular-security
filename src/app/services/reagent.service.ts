import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reagent } from '../models/reagent.model';
import { catchError } from 'rxjs/operators';

const baseUrl = 'http://localhost:8080/reagent';

@Injectable({
  providedIn: 'root',
})
export class ReagentService {
  constructor(private http: HttpClient) {}

  // to get all reagents
  getAll(): Observable<Reagent[]> {
    return this.http.get<Reagent[]>(`${baseUrl}/all`);
  }

  // to create reagent
  create(data: Reagent): Observable<Reagent> {
    return this.http.post<Reagent>(`${baseUrl}/add`, data).pipe(
      catchError((error) => {
        console.error('Error creating reagent:', error);
        throw error; // re-throw the error to be caught by the component
      })
    );
  }

  // to get one reagent by id
  getById(id: any): Observable<Reagent> {
    return this.http.get<Reagent>(`${baseUrl}/${id}`);
  }

  // update reagent
  update(id: any, data: any): Observable<Reagent> {
    return this.http.post<Reagent>(`${baseUrl}/update/${id}`, data);
  }
}
