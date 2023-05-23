import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthModule } from './auth/auth.module';
import { PayementModule } from './payement/payement.module';
import { HomeModule } from './home/home.module';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PayementModule,
    HomeModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFilm);
  }
 }
