import { Component, OnInit } from '@angular/core';
import { Usuario, UsuarioService } from '../usuario.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usuario-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuario-list.component.html',
  styleUrl: './usuario-list.component.css'
})
export class UsuarioListComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(data => this.usuarios = data);
  }

  nuevoUsuario() {
    this.router.navigate(['/usuarios/nuevo']);
  }

  editarUsuario(id: number) {
    this.router.navigate(['/usuarios/editar', id]);
  }

  eliminarUsuario(id: number) {
    this.usuarioService.eliminarUsuario(id).subscribe(() => {
      this.usuarios = this.usuarios.filter(u => u.id !== id);
    });
  }
}