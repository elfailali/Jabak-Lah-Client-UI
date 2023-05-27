import { Injectable } from '@angular/core';
import { Payment } from './payment.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private payments: Payment[] = [];
  private baseUrl = 'http://192.168.0.160:8084/fim/est3Dgate';


  constructor(private http: HttpClient) { }

  addPayment(payment: Payment): void {
    this.payments.push(payment);
  }

  // getPayments(): Payment[] {
  //   return this.payments;
  // }
  getSucceedTransactions(accountId: number): Observable<Payment[]> {
    const url = `${this.baseUrl}/getSucceedTransactions/${accountId}`;
    return this.http.get<Payment[]>(url);
  }

  // deletePayment(payment: Payment): void {
  //   const index = this.payments.indexOf(payment);
  //   if (index !== -1) {
  //     this.payments.splice(index, 1);
  //   }
  // }
}
