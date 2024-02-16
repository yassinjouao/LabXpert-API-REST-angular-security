import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fournisseur } from '../models/fournisseur.model';
const baseUrl = 'http://localhost:8080/fournisseur';

@Injectable({
  providedIn: 'root',
})
export class FournisseurService {
  constructor(private http: HttpClient) {}
  // to get all Fournisseur
  getAll(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(`${baseUrl}/all`);
  }
  // to create Fournisseur
  create(data: Fournisseur): Observable<Fournisseur> {
    return this.http.post(`${baseUrl}/save`, data);
  }
  // to get one Fournisseur by id
  getById(id: any): Observable<Fournisseur> {
    return this.http.get<Fournisseur>(`${baseUrl}/${id}`);
  }
  // update Fournisseur
  update(id: any, data: any): Observable<Fournisseur> {
    return this.http.post<Fournisseur>(`${baseUrl}/update/${id}`, data);
  }
}
