import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-modal.component.html',
})
export class LoginModalComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  @Output() close = new EventEmitter<void>();

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  submitting = false;
  errorMessage = '';

  login() {
    if (this.form.invalid) return;
    this.submitting = true;
    const { email, password } = this.form.value;

    this.authService.login(email!, password!).subscribe({
      next: () => {
        this.submitting = false;
        this.close.emit();
        this.router.navigate(['/crm/dashboard']);
      },
      error: () => {
        this.submitting = false;
        this.errorMessage = 'Невірний логін або пароль';
      }
    });
  }
}
