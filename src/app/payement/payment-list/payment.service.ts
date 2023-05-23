import { Injectable } from '@angular/core';
import { Payment } from './payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private payments: Payment[] = [];

  constructor() { }

  addPayment(payment: Payment): void {
    this.payments.push(payment);
  }

  getPayments(): Payment[] {
    return this.payments;
  }

  deletePayment(payment: Payment): void {
    const index = this.payments.indexOf(payment);
    if (index !== -1) {
      this.payments.splice(index, 1);
    }
  }
}
