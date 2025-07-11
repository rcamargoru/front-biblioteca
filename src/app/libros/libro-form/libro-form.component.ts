import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Libro, LibroService } from '../libro.service';
import { Autor, AutorService } from '../../autores/autor.service';
import { Genero, GeneroService } from '../../generos/genero.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-libro-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './libro-form.component.html',
  styleUrl: './libro-form.component.css'
})
export class LibroFormComponent implements OnInit {

  libro: Libro = {
    id: 0,
    titulo: '',
    autor: {
      id: 0,
      nombre: '',
      fechaNacimiento: new Date(),
      genero: '',
      pais: '',
      estado: false
    },
    genero: {
      id: 0,
      nombre: '',
      descripcion: '',
      estado: false
    },
    isbn: '',
    stock: 0,
    
    estado: true
  };
 
  autores: Autor[] = [];
  generos: Genero[] = [];

  constructor(
    private libroService: LibroService,
    private autorService: AutorService,
    private generoService: GeneroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    
    this.autorService.getAutores().subscribe(data => this.autores = data);
    this.generoService.getGeneros().subscribe(data => this.generos = data);

    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.libroService.getLibro(+id).subscribe(data => this.libro = data);
    }
  }

guardarLibro() {
  const autorId = this.libro.autor.id;
  const generoId = this.libro.genero.id;

  if (!autorId || !generoId) {
    alert('Debes seleccionar un autor y un género.');
    return;
  }
  const payload = {
    id: this.libro.id,
    titulo: this.libro.titulo,
    isbn: this.libro.isbn,
    stock: this.libro.stock,
    estado: this.libro.estado,
    autorId: autorId,
    generoId: generoId
  };

  if (this.libro.id) {
    this.libroService.actualizarLibro(payload).subscribe(() => {
      this.router.navigate(['/libros']);
    });
  } else {
    this.libroService.crearLibro(payload).subscribe(() => {
      this.router.navigate(['/libros']);
    });
  }
}
}