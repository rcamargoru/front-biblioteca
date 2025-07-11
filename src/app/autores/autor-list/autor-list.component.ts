import { Component, OnInit } from '@angular/core';
import { Autor, AutorService } from '../autor.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({ 
  selector: 'app-autor-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './autor-list.component.html',
  styleUrl: './autor-list.component.css'
})
export class AutorListComponent implements OnInit{
 autores: Autor[] = [];

  constructor(private autorService: AutorService, private router: Router) {}

  ngOnInit(): void {
    this.cargarAutores();
  }

  cargarAutores() {
    this.autorService.getAutores().subscribe(data => {
      this.autores = data;
    });
  }

  crearAutor() {
    this.router.navigate(['/autores/nuevo']);
  }

  editarAutor(id?: number) {
    this.router.navigate(['/autores/editar', id]);
  }

  eliminarAutor(id?: number) {
    if (confirm('¿Estás seguro de eliminar este autor?')) {
      this.autorService.eliminarAutor(id!).subscribe(() => {
        this.cargarAutores();
      });
    }
  }
}
