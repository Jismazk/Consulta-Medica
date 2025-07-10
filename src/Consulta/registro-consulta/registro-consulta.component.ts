import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-consulta',
  imports: [ReactiveFormsModule],
  templateUrl: './registro-consulta.component.html',
  styleUrl: './registro-consulta.component.scss'
})
export class RegistroConsultaComponent {
  
Consulta:FormGroup = new FormGroup({
  cliente : new FormControl(''),
  Doctor: new FormControl(''),
  Diagnostico: new FormControl(''),
  medicina: new FormControl('')
});

Registro(){
  
}


}
