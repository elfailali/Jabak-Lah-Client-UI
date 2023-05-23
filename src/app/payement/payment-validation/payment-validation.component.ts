import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

}
