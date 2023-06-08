import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentValidationComponent } from './payment-validation/payment-validation.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { CreditorSelectionComponent } from './creditor-selection/creditor-selection.component';
import { BillTypeSelectionComponent } from './bill-type-selection/bill-type-selection.component';
import { UnpaidBillsComponent } from './unpaid-bills/unpaid-bills.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OtpSmsComponent } from './otp-sms/otp-sms.component';
import { RechargeComponent } from './recharge/recharge.component';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';






@NgModule({
  declarations: [
    PaymentValidationComponent,
    PaymentListComponent,
    CreditorSelectionComponent,
    BillTypeSelectionComponent,
    UnpaidBillsComponent,
    OtpSmsComponent,
    RechargeComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterModule,
    
  ],
  exports: [
    PaymentValidationComponent,
    CreditorSelectionComponent,
    PaymentListComponent,
    BillTypeSelectionComponent,
    OtpSmsComponent,
    RechargeComponent,
  ]
})
export class PayementModule { }
