import { Component, OnInit } from '@angular/core';
import { Autor, AutorService } from '../autor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-autor-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './autor-form.component.html',
  styleUrl: './autor-form.component.css'
})
export class AutorFormComponent implements OnInit{
  autor: Autor = {
    nombre: '',
    fechaNacimiento: new Date(),
    genero: '',
    pais: '',
    estado: true
  };

  constructor(
    private autorService: AutorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.autorService.getAutor(+id).subscribe(data => {
        this.autor = data;
      });
    }
  }

  guardar() {
    if (this.autor.id) {
      this.autorService.actualizarAutor(this.autor.id, this.autor).subscribe(() => {
        this.router.navigate(['/autores']);
      });
    } else {
      this.autorService.crearAutor(this.autor).subscribe(() => {
        this.router.navigate(['/autores']);
      });
    }
  }
}
