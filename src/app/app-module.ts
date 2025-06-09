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

import { ReactiveFormsModule } from '@angular/forms'; // Añade esta línea

@NgModule({
  declarations: [
    App,
    Login,
    Register
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
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
