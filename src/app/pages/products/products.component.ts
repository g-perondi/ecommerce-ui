import {Component, inject, OnInit} from "@angular/core";
import {Product} from './product.model';
import {ProductsService} from './products.service';

@Component({
  selector: "app-products",
  standalone: false,
  template: `
    <div class="flex flex-col gap-6 items-center justify-center px-5 bg-zinc-200 full-screen">

      <app-filter-bar (filtersSet)="onSetFilters($event)" (sortingOptionChanged)="onSortingOptionChange($event)"/>

      <app-product-list [products]="products"/>

      <app-pagination (pageChanged)="onPageChange($event)"/>

    </div>
  `,
  styles: []
})
export class ProductsComponent implements OnInit {

  private readonly productsService: ProductsService = inject(ProductsService);

  products!: Product[];
  productFilters?: { minPrice?: number; maxPrice?: number; query?: string };
  selectedSorting: string = "name-asc";

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      (data) => (this.products = data)
    );
  }

  onSetFilters(filters: { minPrice?: number; maxPrice?: number; query?: string }) {
    this.productFilters = filters;
    console.log(this.productFilters);
  }

  onSortingOptionChange(selectedSorting: string) {
    this.selectedSorting = selectedSorting;
    console.log(this.selectedSorting);
  }

  onPageChange(page: number) {
    console.log("page", page);
  }

}
