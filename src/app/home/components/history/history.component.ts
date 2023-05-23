import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{

  transactions?: any[]; // Array to hold the transaction history

  constructor() { }

  ngOnInit(): void {
    // Simulate fetching transaction history from an API or service
    this.fetchTransactionHistory();
  }

  fetchTransactionHistory(): void {
    // Simulate API call to fetch the transaction history
    setTimeout(() => {
      this.transactions = [
        { id: 1, amount: 100, date: '2022-01-01' },
        { id: 2, amount: 200, date: '2022-01-02' },
        { id: 3, amount: 300, date: '2022-01-03' }
      ]; // Set the transaction history to sample data
    }, 2000); // 2s wait
  }
}

