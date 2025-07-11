import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Libro, LibroPayload, LibroPayloadRes, LibroService } from '../libro.service';
 
@Component({
  selector: 'app-libro-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './libro-list.component.html',
  styleUrl: './libro-list.component.css'
})

export class LibroListComponent implements OnInit {
 
  libros: Libro[] = [];
  constructor(
    private libroService: LibroService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarLibros();
  }

  cargarLibros(): void {
    this.libroService.getLibros().subscribe(data => {
      this.libros = data;
    });
  }

  editarLibro(id: number): void {
    this.router.navigate(['/libros/editar', id]);
  }

  eliminarLibro(id: number): void {
    if (confirm('¿Está seguro de eliminar este libro?')) {
      this.libroService.eliminarLibro(id).subscribe(() => {
        this.cargarLibros();
      });
    }
  }

  nuevoLibro(): void {
    this.router.navigate(['/libros/nuevo']);
  }
}
