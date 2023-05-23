import { Component, OnInit } from '@angular/core';
import { Payment } from './payment.model';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent {

  payments: Payment[]  = [
    { id: 1, amount: 100, date: '2022-01-01' },
    { id: 2, amount: 200, date: '2022-01-02' },
    { id: 3, amount: 300, date: '2022-01-03' }
  ];

  constructor(private paymentService: PaymentService) {
    // this.payments = paymentService.getPayments();
  }

  addPayment(payment: Payment): void {
    this.paymentService.addPayment(payment);
  }

  deletePayment(payment: Payment): void {
    this.paymentService.deletePayment(payment);
  }
}