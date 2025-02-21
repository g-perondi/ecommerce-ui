import {Component, inject, OnInit} from "@angular/core";
import {type Cart} from './cart.model';
import {CartService} from './cart.service';

@Component({
  selector: "app-cart",
  template: `

    <section class="bg-zinc-50 py-8 antialiased dark:bg-gray-900 md:py-16 full-screen">
      <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>

        <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">

          <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <app-cart-item-list *ngIf="cart.cartItems.length !== 0" [cartItems]="cart.cartItems"/>
            <div *ngIf="cart.cartItems.length === 0">
              Your cart is empty
            </div>
          </div>

          <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div
              class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <p class="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

              <div class="space-y-4">
                <div class="space-y-2">
                  <dl class="flex items-center justify-between gap-4">
                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                    <dd class="text-base font-medium text-gray-900 dark:text-white">
                      {{ originalPrice | currency }}
                    </dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4">
                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                    <dd class="text-base font-medium text-green-600">
                      {{ totalSaving | currency }}
                    </dd>
                  </dl>

                </div>

                <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                  <dd class="text-base font-bold text-gray-900 dark:text-white">
                    {{ cart.totalPrice | currency }}
                  </dd>
                </dl>
              </div>

              <a href="#"
                 class="flex w-full items-center justify-center rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed
                to Checkout</a>

              <div class="flex items-center justify-center gap-2">
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                <a href="/products" title=""
                   class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                  Continue Shopping
                  <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                       viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M19 12H5m14 0-4 4m4-4-4-4"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  `,
  standalone: false,
  styles: []
})
export class CartComponent implements OnInit {

  private readonly cartService = inject(CartService);

  cart: Cart = {cartItems: [], totalPrice: 0};

  originalPrice!: number;
  discountedPrice!: number;
  totalSaving!: number;

  ngOnInit() {
    this.cartService.get().subscribe(cart => {
      this.cart = cart;
    });

    this.originalPrice = this.cart.cartItems.reduce((sum, cartItem) => sum + (cartItem.product.price * cartItem.quantity), 0);
    this.discountedPrice = this.cart.cartItems.reduce((sum, cartItem) => sum + (cartItem.product.specialPrice * cartItem.quantity), 0)
    this.totalSaving = this.originalPrice - this.discountedPrice;
  }

  updateQuantity(productId: number) {
    this.cartService.update(this.cart);
  }

  removeItem(productId: number) {
    this.cartService.removeProduct(productId);
  }

}
