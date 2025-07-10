import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsultaService } from '../../services/consulta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-consulta',
  standalone: true,
  templateUrl: './registro-consulta.component.html',
  styleUrls: ['./registro-consulta.component.css'],
  imports: [ReactiveFormsModule] // ← IMPORTANTE: Aquí se soluciona el error
})
export class RegistroConsultaComponent {
  Consulta: FormGroup;

  constructor(
    private fb: FormBuilder,
    private consultaService: ConsultaService,
    private router: Router
  ) {
    this.Consulta = this.fb.group({
      Cliente: ['', Validators.required],
      Doctor: ['', Validators.required],
      Diagnositco: ['', Validators.required],
      Medicina: ['', Validators.required]
    });
  }

  Registro() {
    if (this.Consulta.valid) {
      this.consultaService.agregarConsulta(this.Consulta.value);
      this.Consulta.reset();
      this.router.navigate(['/tabla-consulta']);
    } else {
      alert('Por favor completa todos los campos.');
    }
  }
}
