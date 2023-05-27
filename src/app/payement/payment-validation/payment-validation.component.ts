import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment-validation',
  templateUrl: './payment-validation.component.html',
  styleUrls: ['./payment-validation.component.css']
})
export class PaymentValidationComponent {
  phone?: string = '0624425227';
  creancierCode?: string = '1';
  amount?: string = '20 DH';
  date?: string = '23/06/2022';

  constructor(private http: HttpClient){}

  sendVerificationCode(): void {
    const accountId = 1; // Replace with the actual account ID

    console.log('it work')

    // Make the API call to send the verification code
    this.http.get<number>(`http://192.168.0.55:8084/fim/est3Dgate/sendVerificationCode/${accountId}`)
      .subscribe(
        response => {
          console.log(response); // Log the response (verification code message)
        },
        error => {
          console.error('Error occurred while sending the verification code:', error);
        }
      );
  }
}
