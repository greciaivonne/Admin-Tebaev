import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulariosadm',
  templateUrl: './formulariosadm.html',
  styleUrls: ['./formulariosadm.css'],
  standalone: false
})
export class Formulariosadm implements OnInit {
  formularios: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerFormularios();
  }

  obtenerFormularios() {
    this.http.get<any[]>('http://localhost:3000/api/formularios') // Ajusta URL según tu API
      .subscribe({
        next: data => this.formularios = data,
        error: err => console.error('Error al obtener formularios:', err)
      });
  }

  onSelectChange(event: Event, formularioId: string, campo: string) {
  const selectElement = event.target as HTMLSelectElement;
  const valor = selectElement.value;
  this.actualizarCampo(formularioId, campo, valor);
}


  actualizarCampo(formularioId: string, campo: string, valor: string) {
    this.http.put(`http://localhost:3000/api/formularios/${formularioId}`, {
      [campo]: valor
    }).subscribe({
      next: res => console.log('Actualizado correctamente'),
      error: err => console.error('Error al actualizar:', err)
    });
  }
}

