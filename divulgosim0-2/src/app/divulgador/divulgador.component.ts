import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-divulgador',
   standalone: true,
  imports: [CommonModule],
  template: `
    <section>
        <h1>Para Divulgadores</h1>
        <p>Gerencie suas tarefas de divulgação e acompanhe seu progresso</p>
    </section>
    <section class="features">
      <div class="feature">
        <h2>Encontre Eventos</h2>
      <button (click)="explora()">explorar eventos</button>
      <button (click)="minhas()"> minhas tarefas</button>
      </div>
    </section>
  `,
  styleUrls: ['./divulgador.component.css']
})
export class DivulgadorComponent {
  title = 'ava para divulgadores';
  explorar?: string;
  minhast?: string;

   explora(){
     this.explorar;
  }

   minhas(){
     this.minhast;
  }


}