import { Routes } from '@angular/router';
import { AutoresComponent } from './autores/autores.component';
import { AutorListComponent } from './autores/autor-list/autor-list.component';
import { AutorFormComponent } from './autores/autor-form/autor-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/autores', pathMatch: 'full' },
  { path: 'autores', component: AutorListComponent },
  { path: 'autores/nuevo', component: AutorFormComponent },
  { path: 'autores/editar/:id', component: AutorFormComponent }
];
