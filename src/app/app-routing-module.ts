import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Panel } from './components/panel/panel';
import { Avisosadm } from './components/avisosadm/avisosadm';
import { Formulariosadm } from './components/formulariosadm/formulariosadm';
import { AuthGuard } from './auth/auth-guard';

const routes: Routes = [
  { 
    path: 'login', 
    component: Login,
    data: { title: 'Inicio de sesión administrativo' } 
  },
  { 
    path: 'register', 
    component: Register,
    data: { title: 'Registro administrativo' } 
  },
  { 
    path: 'panel', 
    component: Panel,
    canActivate: [AuthGuard],
    children: [
      { path: 'avisos', component: Avisosadm },
      { path: 'formulario', component: Formulariosadm },
      { path: '', redirectTo: 'avisos', pathMatch: 'full' }
    ],
    data: { title: 'Panel administrativo' }
  },
  { 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    redirectTo: 'login' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
