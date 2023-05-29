import { Component, OnInit } from '@angular/core';
import { Payment } from './payment.model';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit{

  payments: Payment[]  = [
    { transactionId: 1, creditor:'IAM', amount: 100, date: '2022-01-01'},
    { transactionId: 2, creditor:'IAM', amount: 200, date: '2022-01-02'},
    { transactionId: 3, creditor:'Inwi', amount: 300, date: '2022-01-03'}
  ];

  constructor(private paymentService: PaymentService) {
    // this.payments = paymentService.getPayments();
  }

  ngOnInit(): void {
      this.loadTransactions();
  }

  loadTransactions(): void {
    const accountId = 1; // Provide the account ID here
    this.paymentService.getSucceedTransactions(accountId).subscribe(
      (data) => {
        this.payments = data;
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }

  // addPayment(payment: Payment): void {
  //   this.paymentService.addPayment(payment);
  // }

  // deletePayment(payment: Payment): void {
  //   this.paymentService.deletePayment(payment);
  // }
}