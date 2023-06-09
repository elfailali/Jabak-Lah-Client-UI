import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-otp-sms',
  templateUrl: './otp-sms.component.html',
  styleUrls: ['./otp-sms.component.css']
})
export class OtpSmsComponent {

  isLoading: boolean = false;
  // @Input() phoneNumber: string;
  phoneNumber: string = '0624425227'; // number of user 
  @Output() verifyOtp: EventEmitter<string> = new EventEmitter<string>();

  otpForm: FormGroup;

  constructor(private router: Router) {
    this.otpForm = new FormGroup({
      otp: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)])
    });
    
  }

  onSubmit(): void {
    if (this.otpForm.valid) {
      const otp = this.otpForm.get('otp')?.value;
      console.log("otp sms = ", otp)
      this.isLoading = true; // Display loading spinner
      this.verifyOtp.emit(otp);

      // Simulating API call to verify OTP
    setTimeout(() => {
      const isCodeCorrect = otp === '1234';

      if (isCodeCorrect) {
        this.router.navigate(['/transaction-passed']);
      } else {
        this.isLoading = false; // Hide loading spinner
        // Display error message and allow the user to enter OTP again
        alert('Incorrect OTP. Please try again.');
      }
    }, 2000);
    }
    
  }

  
}
