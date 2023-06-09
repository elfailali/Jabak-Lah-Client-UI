
import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';
import { SharedDataService } from '../services/shared-data.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  selectedProduct: Product | null = null;

  constructor(private router: Router, private sharedDataService: SharedDataService) { }


  products: Product[] = [
    // Add your product objects here
    // Example:
    {
      itemName: "Product 1",
      quantity: 200,
      category: "ELECTRONIC",
      productNumber: "12345",
      price: 85.0,
      image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      itemName: "Product 2",
      quantity: 150,
      category: "CLOTHING",
      productNumber: "67890",
      price: 49.99,
      image: "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      itemName: "Product 1",
      quantity: 200,
      category: "ELECTRONIC",
      productNumber: "12345",
      price: 85.0,
      image: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      itemName: "Product 2",
      quantity: 150,
      category: "CLOTHING",
      productNumber: "67890",
      price: 49.99,
      image: "https://images.pexels.com/photos/4465828/pexels-photo-4465828.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      itemName: "Product 3",
      quantity: 100,
      category: "HOME",
      productNumber: "54321",
      price: 129.99,
      image: "https://images.pexels.com/photos/397978/pexels-photo-397978.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];


  onSelectProduct(product: Product): void {
    this.selectedProduct = product;
    this.sharedDataService.setSelectedProductData(product);
  
    console.log("from list product Selected product:", product);
    // Navigate to a different component or perform any other desired action
    this.router.navigate(['/product-details', product.productNumber]);
  }
  
}

