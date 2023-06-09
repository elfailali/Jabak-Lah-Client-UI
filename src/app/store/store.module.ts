import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    FormsModule
  ],
  exports: [
    ProductListComponent,
    ProductComponent
  ]
})
export class StoreModule { }
