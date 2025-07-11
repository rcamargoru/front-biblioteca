import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Autor {
  id?: number;
  nombre: string;
  fechaNacimiento: Date;
  genero: string;
  pais: string;
  estado: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AutorService {
 private apiUrl = 'http://localhost:8080/api/autores'; // Asegúrate de exponer este endpoint en tu backend

  constructor(private http: HttpClient) { }

  getAutores(): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.apiUrl);
  }

  getAutor(id: number): Observable<Autor> {
    return this.http.get<Autor>(`${this.apiUrl}/${id}`);
  }

  crearAutor(autor: Autor): Observable<Autor> {
    return this.http.post<Autor>(this.apiUrl, autor);
  }

  actualizarAutor(id: number, autor: Autor): Observable<Autor> {
    return this.http.put<Autor>(`${this.apiUrl}/${id}`, autor);
  }

  eliminarAutor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
