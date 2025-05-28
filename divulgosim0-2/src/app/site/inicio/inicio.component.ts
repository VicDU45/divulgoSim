import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="hero-container">
      <div class="badge">Plataforma de divulgação de eventos</div>

      <h1 class="hero-title">
        Conectando 
        <span class="gradient-text">organizadores</span> e 
        <span class="gradient-text">divulgadores</span>
      </h1>

      <p class="hero-subtitle">
        Aumente o alcance dos seus eventos e ganhe recompensas divulgando eventos que você gosta. Tudo em uma única plataforma.
      </p>

      <div class="hero-buttons">
        <a class="btn-primary" routerLink="/cadastro" routerLinkActive="active"> Começar agora </a>
        <button class="btn-outline" (click)="explicacion()">Como funciona</button>
      </div>

      <div *ngIf="showfuncion" class="funcionsim">
        <div class="funcionsimGeral">
          <h2>Como Funciona o DivulgoSim</h2>
          <p>Conectamos organizadores de eventos com divulgadores para maximizar o alcance e o sucesso dos seus eventos.</p>

        </div>
        <div class="funcionsimDivulg">
          <div class="funcionsimDivulgFunc">
            <h3>Para divulgadores</h3>
            <nav>
              <ol>
                <li>Cadastre-se: Crie sua conta gratuita como divulgador e complete seu perfil com suas redes sociais.</li>
                <li>Encontre Eventos: Navegue pelos eventos disponíveis e escolha aqueles que mais combinam com seu perfil.</li>
                <li>Divulgue: Realize as tarefas de divulgação solicitadas pelos organizadores em suas redes sociais.</li>
                <li>Comprove: Envie os links das suas publicações para comprovar a realização das tarefas.</li>
              </ol>	
            </nav>
          </div>
          <div class="funcionsimDivulgVant">
            <h3>Vantagens para Divulgadores</h3>
            <nav>
              <ul>
                <li>Acesso a eventos exclusivos</li>
                <li>Aumente sua rede de contatos</li>
                <li>cresça nas redes sociais</li>
                <li>Programa de indicação</li>
              </ul>	
            </nav>
          </div>
        </div>
        <div class="funcionsimOrgan">
          <div class="funcionsimOrganFunc">
            <h3>Para organizadores</h3>
            <nav>
              <ol>
                <li>Cadastre-se: Crie sua conta como organizador e aguarde a aprovação do administrador.</li>
                <li>Crie Eventos: Cadastre seus eventos com todas as informações relevantes para atrair divulgadores.</li>
                <li>Defina Tarefas: Crie tarefas específicas de divulgação para que os divulgadores possam promover seu evento.</li>
                <li>Aprove Submissões: Verifique e aprove as tarefas realizadas pelos divulgadores através dos links enviados.</li>
                <li>Maximize o Alcance: Aumente a visibilidade do seu evento e garanta mais participantes através da divulgação orgânica.</li>
              </ol>	
            </nav>
          </div>
          <div class="funcionsimOrganVant">
            <h3>Vantagens para organizadores</h3>
            <nav>
              <ul>
                <li>Aumento do alcance orgânico</li>
                <li>Acesso a divulgadores qualificados</li>
                <li>Redução de custos com marketing</li>
                <li>Gestão simplificada de campanhas</li>
              </ul>	
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div class="tab-content">
      <div>
        <h2 class="tabs-container">Para Organizadores</h2>
        <h3 class="tab-title">Gerencie seus eventos com facilidade</h3>
        <p class="tab-description">Tenha controle total sobre seus eventos, desde a criação até o acompanhamento de resultados, tudo em um único lugar.</p>
      </div>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feature-icon">
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
          </div>
          <h4 class="feature-title">Criação de Eventos</h4>
          <p class="feature-description">Crie e personalize seus eventos em minutos com nossa interface intuitiva.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feature-icon">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h4 class="feature-title">Acesso a Divulgadores</h4>
          <p class="feature-description">Conecte-se com divulgadores qualificados que têm o perfil ideal para seu evento.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feature-icon">
              <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
              <path d="M18 17V9"></path>
              <path d="M13 17V5"></path>
              <path d="M8 17v-3"></path>
            </svg>
          </div>
          <h4 class="feature-title">Métricas Detalhadas</h4>
          <p class="feature-description">Acompanhe o desempenho das suas campanhas com métricas em tempo real.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feature-icon">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <h4 class="feature-title">Comunicação Direta</h4>
          <p class="feature-description">Mantenha contato com os divulgadores através do nosso sistema integrado.</p>
        </div>
      </div>      
    </div>

    <div class="tab-content">
      <div>
        <h2 class="tabs-container">Para Divulgadores</h2>
        <h3 class="tab-title">Divulgue eventos e ganhe recompensas</h3>
        <p class="tab-description">Acesse eventos exclusivos, compartilhe com sua audiência e receba reconhecimento pelo seu trabalho.</p>
      </div>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feature-icon">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
              <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
            </svg>
          </div>
          <h4 class="feature-title">Materiais Prontos</h4>
          <p class="feature-description">Acesse materiais de alta qualidade, textos e hashtags otimizadas para cada evento.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feature-icon">
              <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
              <circle cx="12" cy="8" r="6"></circle>
            </svg>
          </div>
          <h4 class="feature-title">Sistema de Recompensas</h4>
          <p class="feature-description">Ganhe pontos e recompensas exclusivas baseadas no seu desempenho.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feature-icon">
              <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
              <path d="M18 17V9"></path>
              <path d="M13 17V5"></path>
              <path d="M8 17v-3"></path>
            </svg>
          </div>
          <h4 class="feature-title">Acompanhe Resultados</h4>
          <p class="feature-description">Visualize o impacto das suas divulgações com métricas detalhadas.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feature-icon">
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
          </div>
          <h4 class="feature-title">Eventos Exclusivos</h4>
          <p class="feature-description">Tenha acesso prioritário a eventos premium antes de todos.</p>
        </div>
      </div>
    </div>

    <router-outlet></router-outlet>


  `,
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  title = 'ava dinamica explicativa';
  showfuncion: boolean = false;

  explicacion() {
    this.showfuncion = !this.showfuncion;
  }
}
