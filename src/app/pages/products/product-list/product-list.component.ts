import {Component, Input} from "@angular/core";
import {Product} from '../product.model';

@Component({
  selector: "app-product-list",
  standalone: false,
  template: `
    <div class="flex flex-wrap gap-6 justify-evenly sm:mx-5">

      <div
        *ngFor="let product of products"
        class="md:w-2/7 lg:w-2/9 xl:w-2/11 shadow-md rounded-lg flex flex-col items-center bg-white md:hover:scale-110 transition-transform duration-500">
        <app-product-card [product]="product"/>
      </div>

    </div>
  `,
  styles: []
})
export class ProductListComponent {

  @Input() products?: Product[];

}
