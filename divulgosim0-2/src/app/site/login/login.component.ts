
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService, LoginData } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="login-container">
      <div class="login-header">
        <h2>Entrar na Divulgação</h2>
        <p>Entre com seus dados para acessar sua conta</p>
      </div>

      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="login-form">
        
        <div class="form-group">
          <label for="email">E-mail</label>
          <input 
            id="email" 
            type="email"
            formControlName="email"
            [class.error]="isFieldInvalid('email')"
            placeholder="seu@email.com">
          <div *ngIf="isFieldInvalid('email')" class="error-message">
            <span *ngIf="loginForm.get('email')?.errors?.['required']">Email é obrigatório</span>
            <span *ngIf="loginForm.get('email')?.errors?.['email']">Email inválido</span>
          </div>
        </div>

        <div class="form-group">
          <div class="form-label-row">
            <label for="senha">Senha</label>
            <a href="/recuperar-senha">Esqueceu a senha?</a>
          </div>
          <input 
            id="senha" 
            type="password"
            formControlName="senha"
            [class.error]="isFieldInvalid('senha')"
            placeholder="••••••••">
          <div *ngIf="isFieldInvalid('senha')" class="error-message">
            <span *ngIf="loginForm.get('senha')?.errors?.['required']">Senha é obrigatória</span>
          </div>
        </div>

        <div class="form-group remember-me">
          <input type="checkbox" id="remember" formControlName="rememberMe">
          <label for="remember">Lembrar de mim</label>
        </div>

        <div *ngIf="errorMessage" class="alert alert-error">
          {{ errorMessage }}
        </div>

        <div *ngIf="successMessage" class="alert alert-success">
          {{ successMessage }}
        </div>

        <button 
          type="submit" 
          class="btn-submit"
          [disabled]="loginForm.invalid || isLoading">
          <span *ngIf="isLoading">Entrando...</span>
          <span *ngIf="!isLoading">Entrar</span>
        </button>
      </form>

      <div class="login-footer">
        <p>Não tem uma conta? <a routerLink="/cadastro">Cadastre-se</a></p>
      </div>
    </div>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
      rememberMe: [false]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      this.successMessage = '';

      const loginData: LoginData = {
        email: this.loginForm.value.email,
        senha: this.loginForm.value.senha
      };

      this.authService.login(loginData).subscribe({
        next: (response) => {
          this.isLoading = false;
          if (response.success) {
            this.successMessage = 'Login realizado com sucesso!';
            setTimeout(() => {
              // Redirecionar baseado no tipo de usuário
              const user = this.authService.getCurrentUser();
              if (user?.tipoUser === 'organizador') {
                this.router.navigate(['/organizador']);
              } else {
                this.router.navigate(['/divulgador']);
              }
            }, 1000);
          }
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.error?.error || 'Erro ao fazer login. Verifique suas credenciais.';
        }
      });
    } else {
      // Marcar todos os campos como touched para mostrar erros
      Object.keys(this.loginForm.controls).forEach(key => {
        this.loginForm.get(key)?.markAsTouched();
      });
    }
  }
}