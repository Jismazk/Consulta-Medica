import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-barra',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="nav nav-pills mb-3 bg-primary rounded p-2">
      <a
        class="nav-link text-white"
        routerLink="/"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
      >
        Inicio
      </a>
      <a
        class="nav-link text-white"
        routerLink="/prueba"
        routerLinkActive="active"
      >
        Registro Consulta
      </a>
      <a
        class="nav-link text-white"
        routerLink="/tabla-consulta"
        routerLinkActive="active"
      >
        Tabla Consulta
      </a>
      <a
        class="nav-link text-white"
        routerLink="/iniciar-sesion"
        routerLinkActive="active"
      >
        Iniciar Sesión
      </a>
    </nav>
  `,
  styles: [
    `
      .nav-pills .nav-link.active {
        background-color: #ffc107;
        color: #000 !important;
      }
      .nav-pills .nav-link:hover:not(.active) {
        background-color: #0d6efdcc;
        color: white !important;
      }
    `,
  ],
})
export class BarraComponent {}

