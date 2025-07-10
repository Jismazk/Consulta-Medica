import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  private consultas: any[] = [];

  agregarConsulta(consulta: any) {
    this.consultas.push(consulta);
  }

  obtenerConsultas() {
    return this.consultas;
  }
}
