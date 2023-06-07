import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PayementModule } from './payement/payement.module';
import { HomeModule } from './home/home.module';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { NoPageFoundedComponent } from './no-page-founded/no-page-founded.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedDataService } from './payement/shared-data.service';



@NgModule({
  declarations: [
    AppComponent,
    NoPageFoundedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PayementModule,
    HomeModule,
    FontAwesomeModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFilm);
  }
 }
