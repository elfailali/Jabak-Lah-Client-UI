import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface Creditor {
  id: number;
  image: string;
  title: string;
  billTypes: string[];
}

@Component({
  selector: 'app-creditor-selection',
  templateUrl: './creditor-selection.component.html',
  styleUrls: ['./creditor-selection.component.css']
})

export class CreditorSelectionComponent implements OnInit {

  creditors: Creditor[] = [];

  selectedCreditor: Creditor | null = null;


  ngOnInit(): void {
    this.getCreditors();
  }

  getCreditors(): void {
    // Mock data for demonstration purposes
    this.creditors = [
      {
        id: 1,
        image: './../../assets/logos/maroc-telecom-blanc-ar-grande.jpg',
        title: 'Creditor 1',
        billTypes: ['Bill Type 1', 'Bill Type 2', 'Bill Type 3']
      },
      {
        id: 2,
        image: './../../assets/logos/maroc-telecom-blanc-ar-grande.jpg',
        title: 'Creditor 2',
        billTypes: ['Bill Type 4', 'Bill Type 5']
      },
      {
        id: 2,
        image: './../../assets/logos/maroc-telecom-blanc-ar-grande.jpg',
        title: 'Creditor 2',
        billTypes: ['Bill Type 4', 'Bill Type 5']
      },
      {
        id: 2,
        image: './../../assets/logos/maroc-telecom-blanc-ar-grande.jpg',
        title: 'Creditor 2',
        billTypes: ['Bill Type 4', 'Bill Type 5']
      },
      {
        id: 2,
        image: './../../assets/logos/maroc-telecom-blanc-ar-grande.jpg',
        title: 'Creditor 2',
        billTypes: ['Bill Type 4', 'Bill Type 5']
      },
      {
        id: 2,
        image: './../../assets/logos/maroc-telecom-blanc-ar-grande.jpg',
        title: 'Creditor 2',
        billTypes: ['Bill Type 4', 'Bill Type 5']
      },
      {
        id: 3,
        image: 'https://picsum.photos/200',
        title: 'Creditor 3',
        billTypes: ['Bill Type 6', 'Bill Type 7', 'Bill Type 8']
      }
    ];
  }

  constructor(private router: Router) { }

  onSelectCreditor(creditor: Creditor): void {
    this.selectedCreditor = creditor;
    
    this.router.navigate([`/recharge/${creditor.id}`])
    // this.route.navigate([`liste-creance/${title}`])
  }
}
