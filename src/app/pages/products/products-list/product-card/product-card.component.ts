import {Component} from "@angular/core";

@Component({
  selector: "app-product-card",
  standalone: false,
  template: `
    <div class="w-full rounded-md flex items-center justify-center">

      <img
        src="assets/images/t-shirts/tshirt_1.png" alt="Product"
        class="w-full h-full object-cover rounded-md">

    </div>

    <h3 class="mt-4 text-lg font-semibold text-center">Product name</h3>

    <p class="text-gray-600 text-sm text-center">Description</p>

    <p class="text-gray-600 text-sm text-center">0.00$</p>

    <button
      class="mt-3 bg-gradient-to-r from-sky-900 via-pink-700 to-amber-600 text-white rounded hover:opacity-90 flex items-center justify-center size-10">
      <i-feather class="pr-0.5 pt-0.5 " name="shopping-cart"></i-feather>
    </button>
  `,
  styles: []
})
export class ProductCardComponent {

}
