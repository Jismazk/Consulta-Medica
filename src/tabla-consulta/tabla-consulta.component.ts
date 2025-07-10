import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla-consulta',
  imports: [CommonModule],
  templateUrl: './tabla-consulta.component.html',
  styleUrls: ['./tabla-consulta.component.css']
})
export class TablaConsultaComponent {
  consultas = [
    {
      doctor: 'Dr. Ramírez',
      medicamento: 'Paracetamol',
      cliente: 'Ana López',
      diagnostico: 'Fiebre '
    },
    {
      doctor: 'Dra. Garcia',
      medicamento: 'Ibuprofeno',
      cliente: 'Luis Pérez',
      diagnostico: 'Inflamación'
    }
  ];
}
