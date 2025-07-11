import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Genero, GeneroService } from '../genero.service';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-genero-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './genero-list.component.html',
  styleUrl: './genero-list.component.css'
})
export class GeneroListComponent implements OnInit{
generos: Genero[] = [];

  constructor(private generoService: GeneroService, private router: Router) {}

  ngOnInit(): void {
    this.cargarGeneros();
  }

  cargarGeneros() {
    this.generoService.getGeneros().subscribe(data => {
      this.generos = data;
    });
  }

  crearGenero() {
    this.router.navigate(['/generos/nuevo']);
  }

  editarGenero(id?: number) {
    this.router.navigate(['/generos/editar', id]);
  }

  eliminarGenero(id?: number) {
    if (confirm('¿Estás seguro de eliminar este genero?')) {
      this.generoService.eliminarGenero(id!).subscribe(() => {
        this.cargarGeneros();
      });
    }
  }
}
