import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Provider } from '../models/provider.model';
import { SharedDataService } from '../shared-data.service';
import { Creditor } from '../creditor-selection/creditor-selection.component';


@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {
  selectedCreditor?: Creditor | null = null;

  provider = new Provider(
    4,
    '',
    'IAM',
    'Recharge',
    'Maroc Telecom'
  );

  // data from client:
  phone?: string;
  creancierCode?: string;
  amount?: string;
  date?: string;

  loading = false;
  submitted = false;

  rechargeForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    // get the logo and name
    this.sharedDataService.selectedCreditorData$.subscribe(creditor => {
      this.selectedCreditor = creditor;
    });

    // redefine a provider
    this.provider.image = this.selectedCreditor?.image ?? '';
    this.provider.code = this.selectedCreditor?.id ?? 0;
    this.provider.name = this.selectedCreditor?.title ?? '';

    // SAVE DATA AFTER REFRESHING PAGE:
    // store the selected cridetor
    if (this.selectedCreditor) {
      localStorage.setItem('selectedCreditorImage', this.selectedCreditor.image);
      localStorage.setItem('selectedCreditorName', this.selectedCreditor.title);
      localStorage.setItem('selectedCreditorId', this.selectedCreditor.id.toString());

    }

    // Retrieve selected creditor data from localStorage
    const storedCreditorId = localStorage.getItem('selectedCreditorId');
    const storedCreditorImage = localStorage.getItem('selectedCreditorImage');
    const storedCreditorName = localStorage.getItem('selectedCreditorName');

    // Update provider with stored data
    this.provider.code = storedCreditorId ? parseInt(storedCreditorId, 10) : 0;
    this.provider.image = storedCreditorImage || '';
    this.provider.name = storedCreditorName || '';



// Get data from user
    this.rechargeForm = this.formBuilder.group({
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      creancierCode: ['', Validators.required],
      amount: ['10', Validators.required]
    });
    console.log("amount")
    console.log(this.amount)
  }

  get f() {
    return this.rechargeForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.rechargeForm.invalid) {
      return;
    }

    this.date = new Date().toLocaleDateString();
    this.phone = this.rechargeForm.get('phoneNumber')?.value;
    this.creancierCode = this.rechargeForm.get('creancierCode')?.value;
    this.amount = this.rechargeForm.get('amount')?.value;

    console.log(this.amount)

    // Store the data in the shared service to display it in the Validation section
    this.sharedDataService.setRechargeData({
      phoneNumber: this.phone,
      creancierCode: this.creancierCode,
      amount: this.amount
    });

  }
}
