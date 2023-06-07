import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';




export interface Creditor {
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
  filteredCreditors: Creditor[] = []; //for filtered creditors
  selectedCreditor: Creditor | null = null;
  category: string = '';


  ngOnInit(): void {
    this.getCreditors();
  }

  getCreditors(): void {
    // data for demonstration purposes
    // put them in a json file
    this.creditors = [
      {
        id: 1,
        image: './../../assets/logos/maroc-telecom-blanc-ar-grande.jpg',
        title: 'IAM',
        billTypes: ['Recharge']
      },
      {
        id: 2,
        image: './../../assets/logos/1280px-Logo_inwi.svg.png',
        title: 'Inwi',
        billTypes: ['Recharge']
      },
      {
        id: 3,
        image: './../../assets/logos/Orange-logo.png',
        title: 'Orange',
        billTypes: ['Recharge']
      },
      {
        id: 4,
        image: './../../assets/logos/maroc-telecom-blanc-ar-grande.jpg',
        title: 'IAM',
        billTypes: ['Bill']
      },
      {
        id: 5,
        image: './../../assets/logos/1280px-Logo_inwi.svg.png',
        title: 'Inwi',
        billTypes: ['Bill']
      },
      {
        id: 6,
        image: './../../assets/logos/Orange-logo.png',
        title: 'Orange',
        billTypes: ['Bill']
      },
      {
        id: 7,
        image: './../../assets/logos/redal.jpeg',
        title: 'Redal',
        billTypes: ['Bill']
      },
      {
        id: 8,
        image: './../../assets/logos/AMANDIS.png',
        title: 'Amandis',
        billTypes: ['Bill']
      },
      {
        id: 9,
        image: './../../assets/logos/one-maroc.png',
        title: 'ONE',
        billTypes: ['Bill']
      },
      {
        id: 9,
        image: './../../assets/logos/RADEEMA.png',
        title: 'RADEEMA',
        billTypes: ['Bill']
      }
    ];

    this.filteredCreditors = this.creditors;
  }

  onCategoryFilter(event: any): void {
    this.category = event.target.value; // Extract the selected value
    if (this.category) {
      // Filter the creditors based on the selected category

      this.filteredCreditors = this.creditors.filter((creditor) =>
        creditor.billTypes.includes(this.category)
      );
    } else {
      // If no category selected, show all creditors
      console.log('i am in else');
      this.filteredCreditors = this.creditors;
    }
  }

  constructor(private router: Router, private sharedDataService: SharedDataService) { }

  onSelectCreditor(creditor: Creditor): void {
    this.selectedCreditor = creditor;
    this.sharedDataService.setSelectedCreditorData(creditor);

    console.log("creditor : ", creditor)
    this.router.navigate([`/recharge/${creditor.id}`])
    // this.route.navigate([`liste-creance/${title}`])
  }
}
