import { Component, OnInit } from "@angular/core";
import { T_SHIRTS } from '../../../../t-shirts';
import { Product } from './product.model';

@Component({
  selector: "app-products",
  standalone: false,
  template: `
    <div class="flex flex-col gap-6 items-center justify-center px-5 bg-zinc-200 full-screen">

      <app-filter-bar (filtersSet)="onSetFilters($event)" (sortingOptionChanged)="onSortingOptionChange($event)" />

      <app-product-list [products]="products"/>

      <app-pagination (pageChanged)="onPageChange($event)" />

    </div>
  `,
  styles: []
})
export class ProductsComponent implements OnInit {

  products!: Product[];
  productFilters?: { minPrice?: number; maxPrice?: number; query?: string };
  selectedSorting: string = "name-asc";

  ngOnInit(): void {
    this.products = T_SHIRTS;
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
