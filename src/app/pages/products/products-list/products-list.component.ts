import {Component} from "@angular/core";
import {Product} from '../product.model';
import {T_SHIRTS} from '../../../../../t-shirts';

@Component({
  selector: "app-products-list",
  standalone: false,
  template: `
  <div class="flex flex-wrap gap-6 justify-center mx-5 md:mx-auto">

    <div
      *ngFor="let product of products"
      class="md:w-1/4 lg:w-1/5 xl:w-1/6 bg-white shadow-md rounded-lg flex flex-col items-center md:hover:scale-110 transition-transform duration-500">
      <app-product-card [product]="product" />
    </div>

  </div>
  `,
  styleUrl: "./products-list.component.css"
})
export class ProductsListComponent {

  products: Product[] = T_SHIRTS;

}
