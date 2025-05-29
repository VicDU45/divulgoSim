import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService, User } from './../services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'divulgosim0-2';
  showUser: boolean = false;
  showIncognito: boolean = true;
  menuAberto: boolean = false;
  currentUser: User | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  abrirMenu(): void {
    this.menuAberto = !this.menuAberto;
  }

  logout(): void {
    this.authService.logout();
    this.menuAberto = false; // Fecha o menu ao fazer logout
  }

  @HostListener('document:click', ['$event'])
  fecharMenuSeClicarFora(event: MouseEvent): void {
    if (!this.menuAberto) return; // Se o menu já está fechado, não faz nada

    const target = event.target as HTMLElement;
    const perfilHeader = this.elementRef.nativeElement.querySelector('.perfilHeader');
    
    // Verifica se o clique foi fora do elemento perfilHeader (que contém o ícone e o dropdown)
    if (perfilHeader && !perfilHeader.contains(target)) {
      this.menuAberto = false;
    }
  }
}