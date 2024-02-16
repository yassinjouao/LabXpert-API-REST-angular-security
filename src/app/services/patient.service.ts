import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient.model';
const baseUrl = 'http://localhost:8080/patient';
@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private http: HttpClient) {}
  // to get all patient
  getAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${baseUrl}/all`);
  }
  // to create patient
  create(data: Patient): Observable<Patient> {
    return this.http.post(`${baseUrl}/save`, data);
  }
  // to get one patient by id
  getById(id: any): Observable<Patient> {
    return this.http.get<Patient>(`${baseUrl}/${id}`);
  }
  // to update patient
  update(id: any, data: any): Observable<Patient> {
    return this.http.post<Patient>(`${baseUrl}/update/${id}`, data);
  }
}
