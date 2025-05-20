import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-organizador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `    
        <h1>Àrea do Organizador<h1>
        <p>Gerencie seus eventos, crie tarefas para divulgadores e acompanhe o desempenho das suas campanhas.</p>
    
    <section class="features">
      <div class="feature">
        <div>
            <h3>eventos</h3>
             <p>{{valor}}</p>
        </div>
        <div>
            <h3>tarefas</h3>
            <p>{{valor}}</p>
        </div>
        <div>
            <h3>divulgadore</h3>
            <p>{{valor}}</p>
        </div>
      </div>

      <div class="feature">
        <h2>Relatórios Detalhados</h2>
      <button (click)="eventos()">meus eventos</button>
      <button (click)="adicionar()"> adicionar tarefa</button>
      </div>

      <div *ngIf="events"class="eventos">
        <p>
         meus eventos
        </p>
      </div>
            <div *ngIf="adiciora"class="adicionar">
        <p>
         adicione um novo evento
        </p>
      </div>

      </section>
  `,
    styleUrls: ['./organizador.component.css']
})
export class OrganizadorComponent {
  title = 'ava para organizadores';
  valor : number = 23;
  events?: string;
  adiciora?:string;

   eventos(){
     this.events ;
  }

   adicionar(){
     this.events ;
  }


}
