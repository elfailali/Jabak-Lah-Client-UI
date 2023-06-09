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
import { HttpClientModule } from '@angular/common/http';
import { SharedDataService } from './payement/shared-data.service';

import { TransactionPassedComponent } from './payement/transaction-passed/transaction-passed.component';
import { ProductListComponent } from './store/product-list/product-list.component';
import { StoreModule } from './store/store.module';
import { FormsModule } from '@angular/forms';

import { AgentModule } from './agent/agent.module';
import { HeaderComponent } from './shared/header/header.component';
import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    NoPageFoundedComponent,
    // TransactionPassedComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    PayementModule,
    HomeModule,
    FontAwesomeModule,
    HttpClientModule,
    SharedModule,
    HttpClientModule,
    StoreModule
    AgentModule,
  ],
  providers: [SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFilm);
  }
 }
