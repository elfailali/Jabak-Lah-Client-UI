import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.css']
})

export class AmountComponent implements OnInit {
  amount?: number;

  constructor() { }

  ngOnInit(): void {
    // Simulate fetching the amount from an API or service
    this.fetchAmount();
  }

  fetchAmount(): void {
    // Simulate API call to fetch the amount
    setTimeout(() => {
      this.amount = 5000; // Set the amount if nothing get (testing)
    }, 2000 ); // time to wait 2s
  }
}
