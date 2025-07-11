import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
 
  template: `
    
    <div class="container mt-5">
      <h1 class="text-primary">Bienvenido a Consulta Médica</h1>
      <p class="lead">
        Aquí puedes registrar nuevas consultas y ver el historial de consultas médicas.
      </p>
    </div>
  `,
})
export class HomeComponent {}
