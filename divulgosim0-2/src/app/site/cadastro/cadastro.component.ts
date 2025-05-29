import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService, RegisterData } from '../../services/auth.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="form-container">
      <div class="form-header">
        <h2>Criar uma Conta</h2>
        <p>Preencha os dados abaixo para se cadastrar</p>
      </div>

      <form [formGroup]="cadastroForm" (ngSubmit)="onSubmit()" class="form-body">
        
        <div class="form-group">
          <label for="nome">Nome Completo</label>
          <input 
            id="nome" 
            formControlName="nome"
            [class.error]="isFieldInvalid('nome')"
            placeholder="Seu nome completo">
          <div *ngIf="isFieldInvalid('nome')" class="error-message">
            <span *ngIf="cadastroForm.get('nome')?.errors?.['required']">Nome é obrigatório</span>
            <span *ngIf="cadastroForm.get('nome')?.errors?.['minlength']">Nome deve ter pelo menos 2 caracteres</span>
          </div>
        </div>

        <div class="form-group">
          <label for="email">E-mail</label>
          <input 
            id="email" 
            type="email"
            formControlName="email"
            [class.error]="isFieldInvalid('email')"
            placeholder="seu@email.com">
          <div *ngIf="isFieldInvalid('email')" class="error-message">
            <span *ngIf="cadastroForm.get('email')?.errors?.['required']">Email é obrigatório</span>
            <span *ngIf="cadastroForm.get('email')?.errors?.['email']">Email inválido</span>
          </div>
        </div>

        <div class="form-group">
          <label for="senha">Senha</label>
          <input 
            id="senha" 
            type="password"
            formControlName="senha"
            [class.error]="isFieldInvalid('senha')"
            placeholder="••••••••">
          <div *ngIf="isFieldInvalid('senha')" class="error-message">
            <span *ngIf="cadastroForm.get('senha')?.errors?.['required']">Senha é obrigatória</span>
            <span *ngIf="cadastroForm.get('senha')?.errors?.['minlength']">Senha deve ter pelo menos 6 caracteres</span>
          </div>
        </div>

        <div class="form-group">
          <label for="confirmarSenha">Confirmar Senha</label>
          <input 
            id="confirmarSenha" 
            type="password"
            formControlName="confirmarSenha"
            [class.error]="isFieldInvalid('confirmarSenha')"
            placeholder="••••••••">
          <div *ngIf="isFieldInvalid('confirmarSenha')" class="error-message">
            <span *ngIf="cadastroForm.get('confirmarSenha')?.errors?.['required']">Confirmação de senha é obrigatória</span>
            <span *ngIf="cadastroForm.errors?.['passwordMismatch'] && cadastroForm.get('confirmarSenha')?.touched">
              Senhas não coincidem
            </span>
          </div>
        </div>

        <div class="form-group">
          <label>Tipo de Usuário</label>
          <div class="radio-group">
            <label class="radio-label">
              <input type="radio" formControlName="tipoUser" value="organizador">
              Organizador de Eventos
            </label>
            <label class="radio-label">
              <input type="radio" formControlName="tipoUser" value="divulgador">
              Divulgador
            </label>
          </div>
          <div *ngIf="isFieldInvalid('tipoUser')" class="error-message">
            <span>Selecione um tipo de usuário</span>
          </div>
        </div>

        <div class="form-group checkbox-group">
          <input type="checkbox" id="terms" formControlName="acceptTerms">
          <label for="terms">
            Concordo com os <a href="/termos">Termos de Uso</a> e <a href="/privacidade">Política de Privacidade</a>
          </label>
          <div *ngIf="isFieldInvalid('acceptTerms')" class="error-message">
            <span>Você deve aceitar os termos</span>
          </div>
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
          [disabled]="cadastroForm.invalid || isLoading">
          <span *ngIf="isLoading">Cadastrando...</span>
          <span *ngIf="!isLoading">Cadastrar</span>
        </button>
      </form>

      <div class="form-footer">
        <p>Já tem uma conta? <a routerLink="/login">Faça login</a></p>
      </div>
    </div>
  `,
  styleUrls: ['./cadastro.component.css']
})
export class cadastroComponent {
  cadastroForm: FormGroup;
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', [Validators.required]],
      tipoUser: ['', [Validators.required]],
      acceptTerms: [false, [Validators.requiredTrue]]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const senha = form.get('senha');
    const confirmarSenha = form.get('confirmarSenha');
    
    if (senha && confirmarSenha && senha.value !== confirmarSenha.value) {
      return { passwordMismatch: true };
    }
    return null;
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.cadastroForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      this.successMessage = '';

      const registerData: RegisterData = {
        nome: this.cadastroForm.value.nome,
        email: this.cadastroForm.value.email,
        senha: this.cadastroForm.value.senha,
        tipoUser: this.cadastroForm.value.tipoUser
      };

      this.authService.register(registerData).subscribe({
        next: (response) => {
          this.isLoading = false;
          if (response.success) {
            this.successMessage = 'Cadastro realizado com sucesso!';
            setTimeout(() => {
              // Redirecionar baseado no tipo de usuário
              const user = this.authService.getCurrentUser();
              if (user?.tipoUser === 'organizador') {
                this.router.navigate(['/organizador']);
              } else {
                this.router.navigate(['/divulgador']);
              }
            }, 2000);
          }
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.error?.error || 'Erro ao criar conta. Tente novamente.';
        }
      });
    } else {
      // Marcar todos os campos como touched para mostrar erros
      Object.keys(this.cadastroForm.controls).forEach(key => {
        this.cadastroForm.get(key)?.markAsTouched();
      });
    }
  }
}
