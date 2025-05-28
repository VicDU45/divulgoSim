import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { cadastroComponent } from './cadastro/cadastro.component';
import { loginComponent } from './login/login.component';
import { DivulgadorComponent } from './divulgador/divulgador.component';
import { OrganizadorComponent } from './organizador/organizador.component';
import { AuthGuard } from '../guards/auth.guard';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'cadastro', component: cadastroComponent },
  { path: 'login', component: loginComponent },
  { 
    path: 'divulgador', 
    component: DivulgadorComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'organizador', 
    component: OrganizadorComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }
];
