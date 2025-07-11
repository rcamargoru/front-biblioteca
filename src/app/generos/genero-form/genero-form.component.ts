import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Genero, GeneroService } from '../genero.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-genero-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './genero-form.component.html',
  styleUrl: './genero-form.component.css'
})
export class GeneroFormComponent implements OnInit {
  genero: Genero = {
    id: 0,
    nombre: '',
    descripcion: '',
    estado: true
  };

  constructor(
    private generoService: GeneroService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.generoService.getGenero(+id).subscribe(data => {
        this.genero = data;
      });
    }
  }

  guardarGenero(): void {
    if (this.genero.id) {
      this.generoService.actualizarGenero(this.genero.id,this.genero).subscribe(() => {
        this.router.navigate(['/generos']);
      });
    } else {
      this.generoService.crearGenero(this.genero).subscribe(() => {
        this.router.navigate(['/generos']);
      });
    }
  }

}
