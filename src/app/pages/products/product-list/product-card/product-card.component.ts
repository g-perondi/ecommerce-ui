import {Component, EventEmitter, inject, Input, Output} from "@angular/core";
import { Product } from '../../product.model';
import {CartService} from '../../../cart/cart.service';

@Component({
  selector: "app-product-card",
  standalone: false,
  template: `

    <div class="flex flex-col justify-between items-center p-2 md:p-6">

      <div class="w-full rounded-md flex items-center justify-center pt-2">
        <img
          class="object-cover rounded-md w-1/2 md:w-full"
          src="assets/images/t-shirts/{{ product.image }}" alt="Product"
        />
      </div>

      <div class="font-semibold text-xl text-center py-5 h-25">
        {{ product.productName }}
      </div>

      <div class="flex justify-between items-center  w-3/4 h-15">

        <div class="text-gray-600 text-md font-bold text-center">
          {{ (product.discount !== 0 ? product.specialPrice : product.price) | currency }}
        </div>

        <button
          (click)="onAddToCartClicked($event)"
          class="cursor-pointer bg-gradient-to-r from-sky-900 via-pink-700 to-amber-600 text-white rounded hover:opacity-90 flex items-center justify-center size-10">
          <i-feather class="pr-0.5 pt-0.5 " name="shopping-cart"></i-feather>
        </button>

      </div>
    </div>

  `,
  styles: []
})
export class ProductCardComponent {

  private readonly cartService: CartService = inject(CartService);

  @Input({required: true}) product!: Product;

  onAddToCartClicked(event: Event) {
    this.cartService.addProduct(this.product.productId);
    event.stopPropagation();
  }

}
