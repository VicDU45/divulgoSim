import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-organizador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `    
    <h1>Àrea do Organizador</h1>
    <p>Gerencie seus eventos, crie tarefas para divulgadores e acompanhe o desempenho das suas campanhas.</p>

    <section class="features">
      <div class="feature">
        <div class="caixa1" (click)="toggleEvents()">
            <div class="icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="calendar-icon"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
            </div>
            <h3>eventos</h3>
            <p>{{valor}}</p>
        </div>
        <div class="caixa2">
            <div class="icon-container2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="briefcase-icon"
              >
                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                <rect width="20" height="14" x="2" y="6" rx="2"></rect>
              </svg>
            </div>
            <h3>tarefas</h3>
            <p>{{valor}}</p>
        </div>
        <div class="caixa3">
            <div class="icon-container3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="users-icon"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3>divulgadore</h3>
            <p>{{valor}}</p>
        </div>
      </div>
      <div class="feature">
        <div class="feactu">
          <h2>Relatórios Detalhados</h2>
          <button (click)="toggleEvents()">meus eventos</button>
          <button (click)="adicionar()">adicionar tarefa</button>
        </div>
      </div>
      
      <!-- Panel de eventos -->
      <div *ngIf="showEvents" class="eventos">
        <p>meus eventos</p>
      </div>
      
      <!-- Panel de adicionar tareas -->
      <div *ngIf="showAddTask" class="adicionar rounded-lg border shadow-md">
        <div class="task-panel">
          <div class="task-header">
            <div class="header-title">
              <div class="icon-plus">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="circle-plus-icon">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 12h8"></path>
                  <path d="M12 8v8"></path>
                </svg>
              </div>
              <div class="title-text">Adicionar Nova Tarefa</div>
            </div>
            <div class="header-buttons">
              <button class="btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="file-text-icon">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
                Completo
              </button>
              <button class="btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="external-link-icon">
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
                URL
              </button>
              <button class="btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="bolt-icon">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <circle cx="12" cy="12" r="4"></circle>
                </svg>
                Rápido
              </button>
            </div>
          </div>
          <div class="task-subheader">Crie uma tarefa detalhada com todas as informações necessárias</div>
          
          <div class="task-content">
            <!-- Informações Básicas -->
            <div class="task-section">
              <h3 class="section-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="file-text-icon">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
                Informações Básicas
              </h3>
              
              <div class="form-group">
                <label for="task-title">Título da Tarefa <span class="required">*</span></label>
                <input id="task-title" placeholder="Ex: Compartilhar no Instagram" [(ngModel)]="taskTitle">
              </div>
              
              <div class="form-group">
                <label for="task-description">Descrição da Tarefa <span class="required">*</span></label>
                <textarea id="task-description" placeholder="Descreva o que o divulgador deve fazer" [(ngModel)]="taskDescription"></textarea>
              </div>
              
              <div class="form-grid">
                <div class="form-group">
                  <label for="task-event">Associar a um Evento <span class="required">*</span></label>
                  <select id="task-event" [(ngModel)]="taskEvent">
                    <option value="">Selecione um evento</option>
                    <option *ngFor="let evento of eventos" [value]="evento.id">{{evento.nome}}</option>
                  </select>
                </div>
                
                <div class="form-group">
                  <label for="task-deadline">Prazo <span class="required">*</span></label>
                  <input id="task-deadline" type="date" [(ngModel)]="taskDeadline">
                </div>
              </div>
            </div>
            
            <!-- Tipo de Tarefa -->
            <div class="task-section">
              <h3 class="section-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="list-checks-icon">
                  <path d="m3 17 2 2 4-4"></path>
                  <path d="m3 7 2 2 4-4"></path>
                  <path d="M13 6h8"></path>
                  <path d="M13 12h8"></path>
                  <path d="M13 18h8"></path>
                </svg>
                Tipo de Tarefa
              </h3>
              
              <div class="form-group">
                <label>Selecione o Tipo <span class="required">*</span></label>
                <div class="button-grid">
                  <button class="type-button" [class.active]="taskType === 'foto'" (click)="setTaskType('foto')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-small">
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                      <circle cx="9" cy="9" r="2"></circle>
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                    </svg>
                    <span>Postar Foto</span>
                  </button>
                  <button class="type-button" [class.active]="taskType === 'story'" (click)="setTaskType('story')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-small">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span>Postar Story</span>
                  </button>
                  <button class="type-button" [class.active]="taskType === 'compartilhar'" (click)="setTaskType('compartilhar')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="share-icon">
                      <circle cx="18" cy="5" r="3"></circle>
                      <circle cx="6" cy="12" r="3"></circle>
                      <circle cx="18" cy="19" r="3"></circle>
                      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                    </svg>
                    <span>Compartilhar</span>
                  </button>
                  <button class="type-button" [class.active]="taskType === 'curtir'" (click)="setTaskType('curtir')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="thumbs-up-icon">
                      <path d="M7 10v12"></path>
                      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                    </svg>
                    <span>Curtir</span>
                  </button>
                  <button class="type-button" [class.active]="taskType === 'comentar'" (click)="setTaskType('comentar')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="message-square-icon">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Comentar</span>
                  </button>
                  <button class="type-button" [class.active]="taskType === 'outro'" (click)="setTaskType('outro')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="plus-icon">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                    <span>Outro</span>
                  </button>
                </div>
              </div>
              
              <div class="form-group">
                <label>Plataforma <span class="required">*</span></label>
                <div class="button-grid">
                  <button class="platform-button" [class.active]="taskPlatform === 'instagram'" (click)="setTaskPlatform('instagram')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="instagram-icon">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                    <span>Instagram</span>
                  </button>
                  <button class="platform-button" [class.active]="taskPlatform === 'facebook'" (click)="setTaskPlatform('facebook')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="facebook-icon">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    <span>Facebook</span>
                  </button>
                  <button class="platform-button" [class.active]="taskPlatform === 'whatsapp'" (click)="setTaskPlatform('whatsapp')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="message-circle-icon">
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                    </svg>
                    <span>WhatsApp</span>
                  </button>
                  <button class="platform-button" [class.active]="taskPlatform === 'twitter'" (click)="setTaskPlatform('twitter')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="twitter-icon">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                    <span>Twitter</span>
                  </button>
                  <button class="platform-button" [class.active]="taskPlatform === 'tiktok'" (click)="setTaskPlatform('tiktok')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="music-icon">
                      <path d="M9 18V5l12-2v13"></path>
                      <circle cx="6" cy="18" r="3"></circle>
                      <circle cx="18" cy="16" r="3"></circle>
                    </svg>
                    <span>TikTok</span>
                  </button>
                  <button class="platform-button" [class.active]="taskPlatform === 'outro'" (click)="setTaskPlatform('outro')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="globe-icon">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                    <span>Outro</span>
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Material de Apoio -->
            <div class="task-section">
              <h3 class="section-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="file-up-icon">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M12 12v6"></path>
                  <path d="m15 15-3-3-3 3"></path>
                </svg>
                Material de Apoio
              </h3>
              
              <div class="form-group">
                <label for="task-material">Material Adicional (opcional)</label>
                <div class="upload-area">
                  <label for="task-material" class="upload-label">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="image-icon">
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                      <circle cx="9" cy="9" r="2"></circle>
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                    </svg>
                    <p class="upload-text">Imagem ou arquivo para auxiliar na tarefa (opcional)</p>
                  </label>
                  <input id="task-material" type="file" class="hidden-input">
                </div>
              </div>
              
              <div class="form-group">
                <label for="task-notes">Observações Adicionais</label>
                <textarea id="task-notes" placeholder="Informações adicionais que possam ajudar o divulgador" [(ngModel)]="taskNotes"></textarea>
              </div>
            </div>
            
            <div class="action-buttons">
              <button class="btn-secondary" (click)="saveAsDraft()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="save-icon">
                  <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                  <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
                  <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
                </svg>
                Salvar Rascunho
              </button>
              <button class="btn-primary" (click)="createTask()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="circle-plus-icon">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 12h8"></path>
                  <path d="M12 8v8"></path>
                </svg>
                Criar Tarefa
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./organizador.component.css']
})
export class OrganizadorComponent {
  title = 'ava para organizadores';
  valor: number = 23;
  showEvents: boolean = false;
  showAddTask: boolean = false;
  
  // Propiedades del formulario de tareas
  taskTitle: string = '';
  taskDescription: string = '';
  taskEvent: string = '';
  taskDeadline: string = '';
  taskType: string = '';
  taskPlatform: string = '';
  taskNotes: string = '';
  
  // Datos de ejemplo para eventos
  eventos = [
    { id: '1', nome: 'Festa de Aniversário 1' },
    { id: '2', nome: 'Festa de Aniversário 2' },
    { id: '3', nome: 'Workshop de Marketing Digital' },
    { id: '4', nome: 'Show de Rock' },
    { id: '5', nome: 'Feira de Artesanato' },
    { id: '6', nome: 'Palestra Motivacional' }
  ];
  
  toggleEvents() {
    this.showEvents = !this.showEvents;
    if (this.showEvents) {
      this.showAddTask = false;
    }
  }
  
  adicionar() {
    this.showAddTask = !this.showAddTask;
    if (this.showAddTask) {
      this.showEvents = false;
    }
  }
  
  setTaskType(type: string) {
    this.taskType = type;
  }
  
  setTaskPlatform(platform: string) {
    this.taskPlatform = platform;
  }
  
  saveAsDraft() {
    console.log('Salvando rascunho:', {
      title: this.taskTitle,
      description: this.taskDescription,
      event: this.taskEvent,
      deadline: this.taskDeadline,
      type: this.taskType,
      platform: this.taskPlatform,
      notes: this.taskNotes
    });
    // Aquí puedes implementar la lógica para guardar el borrador
  }
  
  createTask() {
    console.log('Creando tarea:', {
      title: this.taskTitle,
      description: this.taskDescription,
      event: this.taskEvent,
      deadline: this.taskDeadline,
      type: this.taskType,
      platform: this.taskPlatform,
      notes: this.taskNotes
    });
    // Aquí puedes implementar la lógica para crear la tarea
    
    // Después de crear la tarea, limpia el formulario y cierra el panel
    this.clearForm();
    this.showAddTask = false;
  }
  
  clearForm() {
    this.taskTitle = '';
    this.taskDescription = '';
    this.taskEvent = '';
    this.taskDeadline = '';
    this.taskType = '';
    this.taskPlatform = '';
    this.taskNotes = '';
  }
}