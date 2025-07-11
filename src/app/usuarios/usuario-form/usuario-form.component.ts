import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario, UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.css'
})
export class UsuarioFormComponent implements OnInit {
  usuario: Usuario = {
    nombre: '',
    documento: 0,
    fechaNacimiento: new Date(),
    estado: true
  };

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.usuarioService.getUsuario(+id).subscribe(data => this.usuario = data);
    }
  }

  guardarUsuario() {
    if (this.usuario.id) {
      this.usuarioService.actualizarUsuario(this.usuario).subscribe(() => {
        this.router.navigate(['/usuarios']);
      });
    } else {
      this.usuarioService.crearUsuario(this.usuario).subscribe(() => {
        this.router.navigate(['/usuarios']);
      });
    }
  }
}