import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Genero {
  id?: number;       
  nombre: string;
  descripcion: string;
  estado: boolean;
}
 
@Injectable({
  providedIn: 'root'
})
export class GeneroService {
 private apiUrl = 'http://localhost:8080/api/generos'; 

  constructor(private http: HttpClient) { }

  getGeneros(): Observable<Genero[]> {
    return this.http.get<Genero[]>(this.apiUrl);
  }

  getGenero(id: number): Observable<Genero> {
    return this.http.get<Genero>(`${this.apiUrl}/${id}`);
  }

  crearGenero(genero: Genero): Observable<Genero> {
    return this.http.post<Genero>(this.apiUrl, genero);
  }

  actualizarGenero(id: number, genero: Genero): Observable<Genero> {
    return this.http.put<Genero>(`${this.apiUrl}/${id}`, genero);
  }

  eliminarGenero(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
