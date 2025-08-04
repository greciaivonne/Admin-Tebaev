import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
// Asegúrate que esté en imports

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.html',
  styleUrls: ['./restablecer.css'],
  standalone: false
})
export class Restablecer implements OnInit {
  resetForm: FormGroup;
  token: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.resetForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.token = params.get('token') || '';
      console.log('Token:', this.token);
    });
  }

  onSubmit() {
    // Si formulario inválido, no hacer nada
    if (this.resetForm.invalid) {
      this.errorMessage = 'Por favor completa todos los campos correctamente.';
      this.successMessage = '';
      return;
    }

    // Validar que las contraseñas coincidan
    const { password, confirmPassword } = this.resetForm.value;
    if (password !== confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      this.successMessage = '';
      return;
    }

    // Validar que el token exista antes de enviar petición
    if (!this.token) {
      this.errorMessage = 'Token inválido o no proporcionado.';
      this.successMessage = '';
      return;
    }

    // Enviar POST al backend con token y nueva contraseña
    this.http.post('http://localhost:5000/api/auth/restablecer', { token: this.token, password })
      .subscribe({
        next: (res: any) => {
          this.successMessage = 'Contraseña restablecida exitosamente.';
          this.errorMessage = '';
          this.resetForm.reset();
        },
        error: (err) => {
          this.errorMessage = err.error?.message || 'Error al restablecer la contraseña.';
          this.successMessage = '';
        }
      });
  }
}
