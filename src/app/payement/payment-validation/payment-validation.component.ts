import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-payment-validation',
  templateUrl: './payment-validation.component.html',
  styleUrls: ['./payment-validation.component.css']
})
export class PaymentValidationComponent implements OnInit {
  phone?: string;
  creancierCode?: string;
  amount?: string;
  date?: Date = new Date();

  constructor(private http: HttpClient, private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    this.loadDataFromStorage(); // Load data from storage on component initialization

    this.sharedDataService.rechargeData$.subscribe(data => {
      if (data) {
        this.phone = data.phoneNumber;
        this.creancierCode = data.creancierCode;
        this.amount = data.amount;
        this.saveDataToStorage(); // Save data to storage when it changes
      }
    });

    // save data in  json file -----------------------------------------------
    const data = {
      phone: this.phone,
      creancierCode: this.creancierCode,
      amount: this.amount,
      date: this.date
    };
    // Convert the data object to a JSON string
    const jsonData = JSON.stringify(data);
    // Store the JSON string in local storage
    localStorage.setItem('data.json', jsonData);
    console.log("data saved in json file")  

    // Retrieve the data from json file
    this.getJsonData()
  }

  // Retrieve the JSON string from local storage
getJsonData() {
  const jsonData = localStorage.getItem('data.json') as string;
  // Convert the JSON string back to an object
  const data = JSON.parse(jsonData);

  console.log(data.phone); // Output: 0624425227
  console.log(data.creancierCode); // Output: 1
  console.log(data.amount); // Output: 20
  console.log(data.date); // Output: 23/06/2022
}

  // to save the data while refreshing the page:  
  loadDataFromStorage(): void {
    const storedData = localStorage.getItem('rechargeData');
    if (storedData) {
      const data = JSON.parse(storedData);
      this.phone = data.phoneNumber;
      this.creancierCode = data.creancierCode;
      this.amount = data.amount;
    }
  }

  saveDataToStorage(): void {
    const data = {
      phoneNumber: this.phone,
      creancierCode: this.creancierCode,
      amount: this.amount
    };
    localStorage.setItem('rechargeData', JSON.stringify(data));
  }

  sendVerificationCode(): void {
    const accountId = 1; // Replace with the actual account ID

    console.log('it works');

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
