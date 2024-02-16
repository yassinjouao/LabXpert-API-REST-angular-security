import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sample } from '../models/sample.model';
const baseUrl = 'http://localhost:8080/sample';
@Injectable({
  providedIn: 'root',
})
export class SampleService {
  constructor(private http: HttpClient) {}

  create(data: Sample): Observable<Sample> {
    return this.http.post(`${baseUrl}/add`, data);
  }
  getByPatientId(id: any): Observable<any> {
    return this.http.get<any>(`${baseUrl}/patient/${id}`);
  }
}
