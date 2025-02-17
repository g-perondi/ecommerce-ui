import { Component, Input } from "@angular/core";
import { CartItem } from './cart-item/cart-item.model';

@Component({
  selector: "app-cart-item-list",
  template: `
    <div
      *ngFor="let item of cartItems"
      class="space-y-6">
      <app-cart-item [cartItem]="item"/>
    </div>
  `,
  standalone: false,
  styles: []
})
export class CartItemListComponent {

  @Input({required: true}) cartItems: CartItem[] = [];

}
