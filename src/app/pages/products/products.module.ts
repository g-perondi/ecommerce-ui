import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductCardComponent } from "./product-list/product-card/product-card.component";
import { ProductsComponent } from "./products.component";
import { SharedModule } from "../../shared/shared.module";
import { IconsModule } from '../../../../icons.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    IconsModule
  ]
})
export class ProductsModule {
}
