import { Routes } from '@angular/router';
import { RegistroConsultaComponent } from '../Consulta/registro-consulta/registro-consulta.component';
import { TablaConsultaComponent } from '../tabla-consulta/tabla-consulta.component';
import { HomeComponent } from '../home/home.component';


export const routes: Routes = [
    {    path: '',
         component: HomeComponent },
    {
        path: '\prueba',
        component: RegistroConsultaComponent
    },
    {   path: 'tabla-consulta',
         component: TablaConsultaComponent }
];
