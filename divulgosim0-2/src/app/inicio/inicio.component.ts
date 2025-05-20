import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <h1>Seja bem-vido ao DivulgoSIM!</h1>
      <p>Conectando Organizadores e Divulgadores</p>
    </section>

    <section class="steps">
      <div class="step">
        <img src="assets/icone1.png" alt="Ícone 1" />
        <h2>Crie seu Evento</h2>
        <p>Organize e publique eventos facilmente.</p>
      </div>
      <div class="step">
        <img src="assets/icone2.png" alt="Ícone 2" />
        <h2>Divulgue</h2>
        <p>Compartilhe com sua rede de contatos.</p>
      </div>
      <div class="step">
        <img src="assets/icone3.png" alt="Ícone 3" />
        <h2>Conecte-se</h2>
        <p>Encontre divulgadores interessados.</p>
      </div>
    </section>
  `,
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {}
