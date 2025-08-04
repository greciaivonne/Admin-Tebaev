import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.html',
  styleUrls: ['./recuperar.css'],
  standalone: false
})
export class Recuperar implements OnInit {
  recuperarForm!: FormGroup;
  submitted = false;
  loading = false;
  serverError = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recuperarForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.serverError = '';

    if (this.recuperarForm.invalid) return;

    this.loading = true;
    const email = this.recuperarForm.value.email;

    this.http.post<any>('http://localhost:5000/api/auth/recuperar', { email })
      .subscribe({
        next: () => {
          alert('Revisa tu correo para el enlace de recuperación');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          this.serverError = err.error?.message || 'Ocurrió un error al enviar el correo.';
          this.loading = false;
        }
      });
  }
}
