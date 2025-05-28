import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-divulgador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <!-- Header Section -->
      <section class="header">
        <h1>Para Divulgadores</h1>
        <p>Gerencie suas tarefas de divulgação e acompanhe seu progresso</p>
      </section>

      <!-- Navigation Tabs -->
      <div class="tabs-container">
        <div class="tabs-wrapper">
          <button 
            type="button" 
            class="tab-button"
            [class.active]="activeTab === 'explorar'"
            (click)="setActiveTab('explorar')">
            <svg class="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
              <path d="M20 3v4"></path>
              <path d="M22 5h-4"></path>
              <path d="M4 17v2"></path>
              <path d="M5 18H3"></path>
            </svg>
            Explorar Eventos
          </button>
          
          <button 
            type="button" 
            class="tab-button"
            [class.active]="activeTab === 'tarefas'"
            (click)="setActiveTab('tarefas')">
            <svg class="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
              <path d="m9 11 3 3L22 4"></path>
            </svg>
            Minhas Tarefas
            <span class="task-count" *ngIf="taskCount > 0">{{taskCount}}</span>
          </button>
        </div>
      </div>

      <!-- Content Area -->
      <div class="content-area">
        <!-- Explorar Eventos Tab Content -->
        <div class="tab-content" *ngIf="activeTab === 'explorar'">
          <div class="events-header">
            <div class="hero-section">
              <h2>Descubra Eventos Incríveis</h2>
              <p>Encontre eventos que combinam com seu perfil e ajude a divulgá-los para sua audiência</p>
              
              <!-- Search Bar -->
              <div class="search-container">
                <div class="search-wrapper">
                  <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                  <input 
                    type="text" 
                    class="search-input" 
                    placeholder="Buscar eventos, categorias, locais..." 
                    [(ngModel)]="searchTerm"
                    (input)="onSearch()"
                    (keyup.enter)="buscarEventos()">
                </div>
              </div>
            </div>
          </div>
          
          <!-- Events Grid -->
          <div class="events-grid">
            <!-- Event cards will be populated here -->
            <!-- Template for communication with organizador.component.ts -->
            <div class="event-card" *ngFor="let evento of eventosFiltrados">
              <div class="event-image">
                <img [src]="evento.imagem || '/api/placeholder/400/300'" [alt]="evento.titulo">
                <div class="event-badge" *ngIf="evento.destaque">
                  <svg class="badge-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                  </svg>
                  Destaque
                </div>
                <button class="bookmark-btn" (click)="toggleBookmark(evento)">
                  <svg class="bookmark-icon" [class.bookmarked]="evento.bookmarked" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                    <path *ngIf="evento.bookmarked" d="m9 10 2 2 4-4"></path>
                  </svg>
                </button>
              </div>
              
              <div class="event-content">
                <div class="event-header">
                  <h3>{{evento.titulo}}</h3>
                  <span class="event-category">{{evento.categoria}}</span>
                </div>
                
                <div class="event-details">
                  <div class="event-date">
                    <svg class="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    {{evento.data}}
                  </div>
                  
                  <div class="event-location">
                    <svg class="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {{evento.local}}
                  </div>
                </div>
                
                <p class="event-description">{{evento.descricao}}</p>
                
                <div class="event-footer">
                  <span class="followers-count">
                    <svg class="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    {{evento.seguidores}} seguidores
                  </span>
                  <button class="details-btn" (click)="verDetalhes(evento)">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div class="load-more-section" *ngIf="eventosFiltrados.length > 0">
            <button class="load-more-btn" (click)="carregarMais()">
              Carregar Mais
            </button>
          </div>
        </div>

        <!-- Minhas Tarefas Tab Content -->
        <div class="tab-content" *ngIf="activeTab === 'tarefas'">
          <div class="tasks-section">
            <h2>Minhas Tarefas de Divulgação</h2>
            <p>Gerencie suas tarefas pendentes</p>
            <!-- Task content will be implemented here -->
            <div class="empty-state" *ngIf="!tarefas || tarefas.length === 0">
              <p>Nenhuma tarefa encontrada</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./divulgador.component.css']
})
export class DivulgadorComponent {
  title = 'ava para divulgadores';
  activeTab: string = 'explorar';
  taskCount: number = 3;
  searchTerm: string = '';
  
  // Dados que virão do organizador.component.ts
  eventos: any[] = [];
  tarefas: any[] = [];
  eventosFiltrados: any[] = [];

  // TODO: Implementar comunicação com organizador.component.ts
  // Estes métodos serão conectados ao serviço de eventos depois
  
  setActiveTab(tab: string) {
    this.activeTab = tab;
    if (tab === 'explorar') {
      this.loadEventos();
    } else if (tab === 'tarefas') {
      this.loadTarefas();
    }
  }

  loadEventos() {
    // TODO: Buscar eventos do organizador.component.ts
    // Placeholder para estrutura
    this.eventosFiltrados = [...this.eventos];
    console.log('Carregando eventos...');
  }

  onSearch() {
    // Filtrar eventos en tiempo real mientras escribe
    if (!this.searchTerm.trim()) {
      this.eventosFiltrados = [...this.eventos];
      return;
    }

    const termo = this.searchTerm.toLowerCase().trim();
    this.eventosFiltrados = this.eventos.filter(evento => 
      evento.titulo?.toLowerCase().includes(termo) ||
      evento.categoria?.toLowerCase().includes(termo) ||
      evento.local?.toLowerCase().includes(termo) ||
      evento.descricao?.toLowerCase().includes(termo)
    );
  }

  buscarEventos() {
    // Ejecutar búsqueda al presionar Enter
    console.log('Buscando eventos por:', this.searchTerm);
    this.onSearch();
    // TODO: Implementar búsqueda más avanzada si es necesario
  }

  loadTarefas() {
    // TODO: Buscar tarefas de divulgação
    console.log('Carregando tarefas...');
  }

  toggleBookmark(evento: any) {
    evento.bookmarked = !evento.bookmarked;
    // TODO: Salvar estado do bookmark
  }

  verDetalhes(evento: any) {
    // TODO: Navegar para detalhes do evento
    console.log('Ver detalhes do evento:', evento);
  }

  carregarMais() {
    // TODO: Carregar mais eventos
    console.log('Carregando mais eventos...');
  }
}