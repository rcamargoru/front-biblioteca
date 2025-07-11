import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EstadisticaService {
  private apiUrl = 'http://localhost:8080/api/prestamos/estadisticas/mensuales';

  constructor(private http: HttpClient) {}

  getPrestamosPorMes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);

    // 🔵 Para pruebas sin backend:
    /*
    return of([
      { mes: 'Enero', total: 20 },
      { mes: 'Febrero', total: 15 },
      { mes: 'Marzo', total: 35 },
      { mes: 'Abril', total: 10 }
    ]);
    */
  }
}