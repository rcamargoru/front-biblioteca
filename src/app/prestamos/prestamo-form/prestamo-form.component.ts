import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Prestamo, PrestamoService } from '../prestamo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from '../../libros/libro.service';
import { Usuario } from '../../usuarios/usuario.service';

@Component({
  selector: 'app-prestamo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prestamo-form.component.html',
  styleUrl: './prestamo-form.component.css'
})
export class PrestamoFormComponent implements OnInit {
  prestamo: Prestamo = {
    libroId: 0,
    clienteId: 0,
    estado: 'En préstamo'
  };

  isEdit = false;

  libros: Libro[] = [];
  usuarios: Usuario[] = [];

  constructor(
    private prestamoService: PrestamoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Cargar combos
    this.prestamoService.listarLibros().subscribe(data => this.libros = data);
    this.prestamoService.listarUsuarios().subscribe(data => this.usuarios = data);

    const id = this.route.snapshot.paramMap.get('id');
    this.isEdit = !!id;

    if (id) {
      this.prestamoService.obtenerPrestamo(+id).subscribe(data => {
        this.prestamo = {
          id: data.id,
          libroId: this.libros.find(l => l.titulo === data.libroNombre)?.id ?? 0,
          clienteId: this.usuarios.find(u => u.nombre === data.clienteNombre)?.id ?? 0,
          estado: data.estado
        };
      });
    }
  }

  guardarPrestamo() {
    if (this.prestamo.id) {
      this.prestamoService.actualizarPrestamo(this.prestamo.id, this.prestamo).subscribe(() => {
        this.router.navigate(['/prestamos']);
      });
    } else {
      this.prestamoService.crearPrestamo(this.prestamo).subscribe(() => {
        this.router.navigate(['/prestamos']);
      });
    }
  }
}