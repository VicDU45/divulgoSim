import { Routes } from '@angular/router';
import { DivulgadorComponent } from './divulgador/divulgador.component';
import { OrganizadorComponent } from './organizador/organizador.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'divulgador', component: DivulgadorComponent },
  { path: 'organizador', component: OrganizadorComponent },
  { path: '**', redirectTo: '' } // Rota coringa para redirecionar URLs não encontradas
];