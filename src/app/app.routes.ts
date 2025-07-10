import { Routes } from '@angular/router';
import { RegistroConsultaComponent } from '../Consulta/registro-consulta/registro-consulta.component';
import { TablaConsultaComponent } from '../tabla-consulta/tabla-consulta.component';


export const routes: Routes = [
    {
        path: '\prueba',
        component: RegistroConsultaComponent
    },
    { path: 'tabla-consulta',
         component: TablaConsultaComponent }
];
