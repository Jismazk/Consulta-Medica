import { Routes } from '@angular/router';
import { RegistroConsultaComponent } from '../Consulta/registro-consulta/registro-consulta.component';

import { AppComponent } from './app.component';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';



export const routes: Routes = [
    {

        path: '',
        component: LoginComponent
    },
    {
        path: 'reg',
        component:RegisterComponent
    }

];
