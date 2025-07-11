import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PrestamoResponse, PrestamoService } from '../prestamo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestamo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prestamo-list.component.html',
  styleUrl: './prestamo-list.component.css'
})
export class PrestamoListComponent implements OnInit {
  prestamos: PrestamoResponse[] = [];

  constructor(private prestamoService: PrestamoService, private router: Router) {}

  ngOnInit(): void {
    this.prestamoService.listarPrestamos().subscribe(data => this.prestamos = data);
  }

  nuevoPrestamo() {
    this.router.navigate(['/prestamos/nuevo']);
  }

  editarPrestamo(id: number) {
    this.router.navigate(['/prestamos/editar', id]);
  }
}
