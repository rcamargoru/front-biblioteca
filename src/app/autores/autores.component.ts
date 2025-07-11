import { Component } from '@angular/core';
import { Autor, AutorService } from './autor.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-autores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './autores.component.html',
  styleUrl: './autores.component.css'
})
export class AutoresComponent {
  autores: Autor[] = [];

  constructor(private autorService: AutorService) {}

  ngOnInit() {
    this.autorService.getAutores().subscribe(data => this.autores = data);
  }
}
