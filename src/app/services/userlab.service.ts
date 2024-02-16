import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Userlab } from '../models/userlab.model';
const baseUrl = 'http://localhost:8080/user';
@Injectable({
  providedIn: 'root',
})
export class UserlabService {
  constructor(private http: HttpClient) {}
  // to get all user
  getAll(): Observable<Userlab[]> {
    return this.http.get<Userlab[]>(`${baseUrl}/all`);
  }
  // to create user
  create(data: Userlab): Observable<Userlab> {
    return this.http.post(`${baseUrl}/save`, data);
  }
  // to get one user by id
  getById(id: any): Observable<Userlab> {
    return this.http.get<Userlab>(`${baseUrl}/${id}`);
  }
  // update user
  update(id: any, data: any): Observable<Userlab> {
    return this.http.post<Userlab>(`${baseUrl}/update/${id}`, data);
  }
  // enable user
  enable(id: any): Observable<any> {
    return this.http.get<any>(`${baseUrl}/enable/${id}`);
  }
  // disable user
  disable(id: any): Observable<any> {
    return this.http.get<any>(`${baseUrl}/disable/${id}`);
  }
}
