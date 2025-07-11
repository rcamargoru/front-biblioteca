import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Autor } from '../autores/autor.service';
import { Genero } from '../generos/genero.service';

export interface Libro {
generoNombre?: string;
autorNombre?: string;
  id: number;
  titulo: string;
  autor: Autor;
  genero: Genero; 
  isbn: string;
  stock: number;
  estado: boolean;
}

export interface LibroPayload {
  id?: number;
  titulo: string;
  autorId: number;
  generoId: number;
  isbn: string;
  stock: number;
  estado: boolean;
  generoNombre?: string;
autorNombre?: string;
}

export interface LibroPayloadRes {
generoNombre: string;
autorNombre: string;
  id?: number;
  titulo: string;
  autorId: number;
  generoId: number;
  isbn: string;
  stock: number;
  estado: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class LibroService {
  private apiUrl = 'http://localhost:8080/api/libros';

  constructor(private http: HttpClient) {}

  getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.apiUrl);
  }

  getLibro(id: number): Observable<Libro> {
    return this.http.get<Libro>(`${this.apiUrl}/${id}`);
  }

  crearLibro(libro: LibroPayload): Observable<Libro> {
    return this.http.post<Libro>(this.apiUrl, libro);
  }

  actualizarLibro(libro: LibroPayload): Observable<Libro> {

    return this.http.put<Libro>(`${this.apiUrl}/${libro.id}`, libro);
  }

  eliminarLibro(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}