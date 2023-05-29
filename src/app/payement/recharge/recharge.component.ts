import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Provider } from '../models/provider.model';
import { SharedDataService } from '../shared-data.service';


@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {
  provider?: Provider = new Provider(
    4,
    'IAM',
    './../../assets/logos/maroc-telecom-blanc-ar-grande.jpg',
    'Recharge',
    'Maroc Telecom'
  );

  phone?: string;
  creancierCode?: string;
  amount?: string;
  date?: string;

  loading = false;
  submitted = false;

  rechargeForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    this.rechargeForm = this.formBuilder.group({
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      creancierCode: ['', Validators.required],
      amount: ['10', Validators.required]
    });
    console.log("amount")
    console.log(this.amount)
  }

  onSubmit(): void {
    this.submitted = true;
    console.log('hhhhhhhhhhhhhhhhhhhhhhhhhh')

    if (this.rechargeForm.invalid) {
      console.log('sorti mr')
      return;
    }

    this.date = new Date().toLocaleDateString();
    this.phone = this.rechargeForm.get('phoneNumber')?.value;
    this.creancierCode = this.rechargeForm.get('creancierCode')?.value;
    this.amount = this.rechargeForm.get('amount')?.value;

    console.log(this.amount)

    // Store the data in the shared service
    this.sharedDataService.setRechargeData({
      phoneNumber: this.phone,
      creancierCode: this.creancierCode,
      amount: this.amount
    });



    // Perform further actions or submit the form data
    // ...
  }
}
