import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraComponent } from '../barra/barra.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BarraComponent],
  template: `
    <app-barra></app-barra>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
