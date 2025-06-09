import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';

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
    path: '', 
    redirectTo: '/login', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    redirectTo: '/login' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }