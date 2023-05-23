import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-otp-sms',
  templateUrl: './otp-sms.component.html',
  styleUrls: ['./otp-sms.component.css']
})
export class OtpSmsComponent {

  // @Input() phoneNumber: string;
  phoneNumber: string = '0624425227';
  @Output() verifyOtp: EventEmitter<string> = new EventEmitter<string>();

  otpForm: FormGroup;

  constructor() {
    this.otpForm = new FormGroup({
      otp: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)])
    });
  }

  onSubmit(): void {
    if (this.otpForm.valid) {
      const otp = this.otpForm.get('otp')?.value;
      this.verifyOtp.emit(otp);
    }
  }
}
