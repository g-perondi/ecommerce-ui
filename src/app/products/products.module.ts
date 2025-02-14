import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCardComponent } from './products-list/product-card/product-card.component';
import { SharedModule } from '../shared/shared.module';
import {ProductsComponent} from './products.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
