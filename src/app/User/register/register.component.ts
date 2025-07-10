import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CuentaService } from '../../Servicios/cuenta/cuenta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  newuser: FormGroup= new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    pass: new FormControl('',[Validators.required]),
    nombre: new FormControl('',[Validators.required]),
    apellido: new FormControl('',[Validators.required])
  })

  constructor(private reg:CuentaService, private route:Router ){}
  regi(){
    debugger
    this.reg.onRegis(this.newuser.value).subscribe();
    this.route.navigateByUrl('/');
  }
}
