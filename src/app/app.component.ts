import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistroConsultaComponent } from '../Consulta/registro-consulta/registro-consulta.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RegistroConsultaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Consulta-Medica';
}
