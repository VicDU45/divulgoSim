import { Component, ElementRef, HostListener } from '@angular/core';
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
export class AppComponent {
  title = 'divulgosim0-2';
  showUser: boolean = false;
  showIncognito: boolean = true;
  menuAberto: boolean = false;
  currentUser: User | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  logout(): void {
    this.authService.logout();
  }
/*
  constructor(private elementRef: ElementRef) {}

  loginEvent() {
    this.showUser = !this.showUser;
    if (this.showUser) {
      this.showIncognito = false;
    }
  }

  abrirMenu() {
    this.menuAberto = !this.menuAberto;
  }

  sair() {
    this.showIncognito = !this.showIncognito;
    if (this.showIncognito) {
      this.showUser = false;
    }
  }

  @HostListener('document:click', ['$event'])
  fecharMenuSeClicarFora(event: MouseEvent) {
    const clicouDentro = this.elementRef.nativeElement.contains(event.target);
    if (!clicouDentro) {
      this.menuAberto = false;
    }
  }*/
}
