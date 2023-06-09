import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private selectedProductData: BehaviorSubject<Product | null>;

  constructor() {
    const storedProductData = localStorage.getItem('selectedProduct');
    const initialProductData = storedProductData ? JSON.parse(storedProductData) : null;
    this.selectedProductData = new BehaviorSubject<Product | null>(initialProductData);
  }

  setSelectedProductData(product: Product): void {
    this.selectedProductData.next(product);
    localStorage.setItem('selectedProduct', JSON.stringify(product));
  }

  getSelectedProductData(): BehaviorSubject<Product | null> {
    return this.selectedProductData;
  }
}
