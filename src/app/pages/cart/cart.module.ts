import { CartComponent } from './cart.component';
import { NgModule } from '@angular/core';
import { CartRoutingModule } from './cart-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CartItemComponent } from './cart-item-list/cart-item/cart-item.component';
import { CartItemListComponent } from './cart-item-list/cart-item-list.component';
import { IconsModule } from '../../../../icons.module';

@NgModule({
  declarations: [
    CartComponent,
    CartItemListComponent,
    CartItemComponent,
  ],
  imports: [
    CartRoutingModule,
    CommonModule,
    SharedModule,
    IconsModule
  ]
})
export class CartModule {
}
