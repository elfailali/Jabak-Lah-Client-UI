import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmountComponent } from './components/amount/amount.component';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './home/home.component';
import { faFilm, faUserCircle,faExchangeAlt,faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../app-routing.module';
import { PaymentListComponent } from '../payement/payment-list/payment-list.component';
import { PayementModule } from '../payement/payement.module';





@NgModule({
  declarations: [
    AmountComponent,
    HistoryComponent,
    HomeComponent,
    // HeaderComponent

  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule,
    PayementModule,
    
  ],
  exports: [
    AmountComponent,
    HistoryComponent,
    HomeComponent,
    

  ]
})
export class HomeModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFilm,faUserCircle,faExchangeAlt,faCog);
  }
 }
