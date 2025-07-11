import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../libros/libro.service';
import { Usuario } from '../usuarios/usuario.service';

export interface Prestamo {
  id?: number;
  libroId: number;
  clienteId: number;
  fechaPrestamo?: Date;
  fechaPosibleDevolucion?: Date;
  fechaRealDevolucion?: Date | null;
  estado: string;
}

export interface PrestamoResponse {
  id: number;
  libroNombre: string;
  clienteNombre: string;
  fechaPrestamo: Date;
  fechaPosibleDevolucion: Date;
  fechaRealDevolucion: Date | null;
  estado: string;
}

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {
  private apiUrl = 'http://localhost:8080/api/prestamos';
  private librosUrl = 'http://localhost:8080/api/libros';
  private usuariosUrl = 'http://localhost:8080/api/usuarios';


  http = inject(HttpClient);
  
  listarLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.librosUrl);
  }

  listarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.usuariosUrl);
  }
  listarPrestamos(): Observable<PrestamoResponse[]> {
    return this.http.get<PrestamoResponse[]>(this.apiUrl);
  }

  obtenerPrestamo(id: number): Observable<PrestamoResponse> {
    return this.http.get<PrestamoResponse>(`${this.apiUrl}/${id}`);
  }

  crearPrestamo(prestamo: Prestamo): Observable<PrestamoResponse> {
    return this.http.post<PrestamoResponse>(this.apiUrl, prestamo);
  }

  actualizarPrestamo(id: number, prestamo: Prestamo): Observable<PrestamoResponse> {
    return this.http.put<PrestamoResponse>(`${this.apiUrl}/${id}`, prestamo);
  }

  eliminarPrestamo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}