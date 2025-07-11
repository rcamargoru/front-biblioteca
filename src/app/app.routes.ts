import { Routes } from '@angular/router';
import { AutoresComponent } from './autores/autores.component';
import { AutorListComponent } from './autores/autor-list/autor-list.component';
import { AutorFormComponent } from './autores/autor-form/autor-form.component';
import { GeneroListComponent } from './generos/genero-list/genero-list.component';
import { GeneroFormComponent } from './generos/genero-form/genero-form.component';
import { LibroListComponent } from './libros/libro-list/libro-list.component';
import { LibroFormComponent } from './libros/libro-form/libro-form.component';
import { UsuarioListComponent } from './usuarios/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './usuarios/usuario-form/usuario-form.component';
import { PrestamoListComponent } from './prestamos/prestamo-list/prestamo-list.component';
import { PrestamoFormComponent } from './prestamos/prestamo-form/prestamo-form.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
 { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: 'autores', component: AutorListComponent },
  { path: 'autores/nuevo', component: AutorFormComponent },
  { path: 'autores/editar/:id', component: AutorFormComponent },
  { path: 'generos', component: GeneroListComponent },
  { path: 'generos/nuevo', component: GeneroFormComponent },
  { path: 'generos/editar/:id', component: GeneroFormComponent },
  { path: 'libros', component: LibroListComponent },
  { path: 'libros/nuevo', component: LibroFormComponent },
  { path: 'libros/editar/:id', component: LibroFormComponent },
    { path: 'usuarios', component: UsuarioListComponent },
  { path: 'usuarios/nuevo', component: UsuarioFormComponent },
  { path: 'usuarios/editar/:id', component: UsuarioFormComponent },
    { path: 'prestamos', component: PrestamoListComponent },
  { path: 'prestamos/nuevo', component: PrestamoFormComponent },
  { path: 'prestamos/editar/:id', component: PrestamoFormComponent },
];
