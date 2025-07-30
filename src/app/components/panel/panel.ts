import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.html',
  styleUrls: ['./panel.css'],
  standalone: false
})
export class Panel {
  constructor(private router: Router) {}

  cerrarSesion() {
  const confirmacion = window.confirm('¿Estás seguro de que deseas cerrar sesión?');

  if (confirmacion) {
    localStorage.clear(); // Limpia datos de sesión
    this.router.navigate(['/login']); // Redirige al login
  }
}

}
