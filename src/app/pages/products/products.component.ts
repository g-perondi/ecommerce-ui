import { Component } from "@angular/core";

@Component({
  selector: "app-products",
  standalone: false,
  template: `
    <div class="flex flex-col gap-6 items-center justify-center px-5 bg-zinc-200 full-screen">

      <app-filter-bar/>

      <app-product-list />

      <app-pagination/>

    </div>
  `,
  styles: []
})
export class ProductsComponent {


}
