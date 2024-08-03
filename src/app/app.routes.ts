import { Routes } from '@angular/router';
import { ListaCarrosComponent } from './components/lista-carros/lista-carros.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [

    {path: '', pathMatch: 'full', redirectTo: 'login'},
    {path: "login", component: LoginComponent},
    {path: "lista-carros", component: ListaCarrosComponent},

];
