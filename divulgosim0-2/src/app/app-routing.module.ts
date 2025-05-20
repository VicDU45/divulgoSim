import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivulgadorComponent } from './divulgador/divulgador.component';
import { OrganizadorComponent } from './organizador/organizador.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'divulgador', component: DivulgadorComponent },
  { path: 'organizador', component: OrganizadorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}