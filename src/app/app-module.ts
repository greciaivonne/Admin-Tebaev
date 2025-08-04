import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './components/login/login';
import { Register } from './components/register/register';

import { AuthService } from './auth/auth';
import { AuthGuard } from './auth/auth-guard';
import { JwtInterceptor } from './auth/jwt-interceptor';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { Panel } from './components/panel/panel';

import { Avisosadm } from './components/avisosadm/avisosadm';
import { Formulariosadm } from './components/formulariosadm/formulariosadm';
import { Recuperar } from './components/recuperar/recuperar';
import { Restablecer } from './components/restablecer/restablecer'; // Añade esta línea

import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    App,
    Login,
    Register,
    Panel,
    Avisosadm,
    Formulariosadm,
    Recuperar,
    Restablecer
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    AuthService,
    AuthGuard,
     { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [App]
})
export class AppModule { }
