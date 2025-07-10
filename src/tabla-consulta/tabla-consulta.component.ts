import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaService } from '../services/consulta.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tabla-consulta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-consulta.component.html',
  styleUrls: ['./tabla-consulta.component.css']
})
export class TablaConsultaComponent implements OnInit{
  consultas: any[] = [];

  constructor(private consultaService: ConsultaService) {}

  ngOnInit() {
    this.consultas = this.consultaService.obtenerConsultas();
  }
}
