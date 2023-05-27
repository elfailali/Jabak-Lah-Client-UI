import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.css']
})
export class AmountComponent implements OnInit {
  amount?: number; // 0 just to print number

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Simulate fetching the amount from an API or service
    this.fetchAmount();
    console.log("testgvcchvsdhcvhb")
  }

  fetchAmount(): void {
    const accountId = '1'; // Replace with the actual account ID
    const baseUrl ='http://192.168.0.160';

    // Make the API call to fetch the amount
    this.http.get<number>(`${baseUrl}:8084/fim/est3Dgate/getAccountBalance/${accountId}`)
      .subscribe(
        response => {
          this.amount = response; // Set the fetched amount to the component property
          console.log(response)
          console.log(this.amount)
        },
        error => {
          console.error('Error occurred while fetching the amount:', error);
        }
      );
  }
}
