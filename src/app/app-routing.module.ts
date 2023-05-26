import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CreditorSelectionComponent } from './payement/creditor-selection/creditor-selection.component';
import { RechargeComponent } from './payement/recharge/recharge.component';
import { PaymentValidationComponent } from './payement/payment-validation/payment-validation.component';
import { OtpSmsComponent } from './payement/otp-sms/otp-sms.component';
import { NoPageFoundedComponent } from './no-page-founded/no-page-founded.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path: '/home', component: HomeComponent},
  {path: 'account', component: HomeComponent}, //
  {path: 'payment', component: CreditorSelectionComponent},
  {path: 'settings', component: HomeComponent}, //
  {path: 'recharge/:id-creancier', component: RechargeComponent},
  {path: 'validation', component: PaymentValidationComponent},
  {path: 'otp-sms', component: OtpSmsComponent},
  {path: '**', component: NoPageFoundedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
