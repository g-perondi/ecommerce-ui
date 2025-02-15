import {Component} from "@angular/core";

@Component({
  selector: "app-products-list",
  standalone: false,
  template: `
  <div class="flex flex-wrap gap-8 justify-center">

    <div
      *ngFor="let i of [].constructor(20)"
      class=" w-full md:w-1/4 lg:w-1/5 bg-white shadow-md p-8 rounded-lg flex flex-col items-center md:hover:scale-110 transition-transform duration-500">
      <app-product-card/>
    </div>

  </div>
  `,
  styleUrl: "./products-list.component.css"
})
export class ProductsListComponent {

}
