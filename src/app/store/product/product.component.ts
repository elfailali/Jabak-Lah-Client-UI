import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  selectedProduct: Product | null = null;
  showBuyForm: boolean = false;
  name: string = '';
  phone: string = '';
  address: string = '';
  quantity: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit(): void {
    this.sharedDataService.getSelectedProductData().subscribe(product => {
      this.selectedProduct = product;
    });
  }

  buyNow(): void {
    console.log("Buy Now clicked");
    this.showBuyForm = true;
  }

  submitForm(): void {
    // Get the form data in JSON format
    const formData = {
      name: this.name,
      phone: this.phone,
      address: this.address,
      quantity: this.quantity
    };

    // send it to a server
    console.log("Form Data:", JSON.stringify(formData));
    if(formData){
      
      this.router.navigate(['otp-sms']);
    }

    // Reset the form and hide it
    // this.name = '';
    // this.phone = '';
    // this.address = '';
    // this.quantity = 0;
    // this.showBuyForm = false;
  }

  goBack(): void {
    console.log("Back to Product List clicked");
    this.router.navigate(['/product-list']);
  }
}








