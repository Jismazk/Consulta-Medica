import { Component } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CuentaService } from '../../Servicios/cuenta/cuenta.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  user: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    pass: new FormControl('',[Validators.required])
  });

  constructor(private login:CuentaService, private route:Router){}
  log(){
  debugger
  this.login.onLogin(this.user.value).subscribe((res:any)=>{
    localStorage.setItem('token',res.token)
    this.route.navigateByUrl('/reg');
  })

  }
}
