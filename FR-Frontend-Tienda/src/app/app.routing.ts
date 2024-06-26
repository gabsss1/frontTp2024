import {Routes, RouterModule, Router} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PerfilComponent } from './components/usuario/perfil/perfil.component';

import { AuthGuard } from './guards/auth.guard';

const appRoute : Routes = [
    {path: '', component: InicioComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'cuenta/perfil', component: PerfilComponent, canActivate: [AuthGuard]},
]

export const appRoutingProviders : any [] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoute);