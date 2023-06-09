import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CreditorSelectionComponent } from './payement/creditor-selection/creditor-selection.component';
import { RechargeComponent } from './payement/recharge/recharge.component';
import { PaymentValidationComponent } from './payement/payment-validation/payment-validation.component';
import { OtpSmsComponent } from './payement/otp-sms/otp-sms.component';
import { NoPageFoundedComponent } from './no-page-founded/no-page-founded.component';
import { LoginComponent } from './auth/login/login.component';
import { ChangePassWordComponent } from './auth/change-pass-word/change-pass-word.component';

import { TransactionPassedComponent } from './payement/transaction-passed/transaction-passed.component';
import { ProductListComponent } from './store/product-list/product-list.component';
import { ProductComponent } from './store/product/product.component';

import { FirstPageComponent } from './first-page/first-page.component';


const routes: Routes = [
  {path: '', component: FirstPageComponent},
  { path: 'agent', loadChildren: () => import('./agent/agent.module').then(m => m.AgentModule) },
  
  {path: 'login', component:LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'account', component: HomeComponent}, //
  {path: 'payment', component: CreditorSelectionComponent},
  {path: 'settings', component: HomeComponent}, //
  {path: 'recharge/:id-creancier', component: RechargeComponent},
  {path: 'validation', component: PaymentValidationComponent},
  {path: 'otp-sms', component: OtpSmsComponent},
  {path: 'transaction-passed', component: TransactionPassedComponent},
  {path: 'change-password',component: ChangePassWordComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'product-details/:productNumber', component: ProductComponent},



  {path: '**', component: NoPageFoundedComponent},

 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
