import { Component, DestroyRef, inject, OnInit } from "@angular/core";
import { ProductsService } from './products.service';
import { type ProductsPage } from './products-page.model';
import { type Product } from './product.model';

@Component({
  selector: "app-products",
  standalone: false,
  template: `
    <div class="flex flex-col gap-6 items-center justify-center px-5 bg-zinc-200 full-screen">

      <app-filter-bar (filtersSet)="onSetFilters($event)" (sortingOptionChanged)="onSortingOptionChange($event)"/>

      <app-product-list [products]="productsPage.content"/>

      <app-pagination (pageChanged)="onPageChange($event)"
                      [currentPage]="productsPage.pageNumber"
                      [totalPages]="productsPage.totalPages"/>

    </div>
  `,
  styles: []
})
export class ProductsComponent implements OnInit {

  private readonly productsService: ProductsService = inject(ProductsService);
  private readonly destroyRef = inject(DestroyRef);

  productsPage: ProductsPage = {
    content: [],
    pageNumber: 0,
    pageSize: 20,
    totalPages: 0,
    totalElements: 0,
    isLastPage: true
  };

  isFetching: boolean = false;
  filterActive: boolean = false;

  sortBy: keyof Product = "productName";
  order: "asc" | "desc" = "asc";

  filters: { minPrice?: number; maxPrice?: number; query?: string; } = {};

  ngOnInit(): void {
    this.fetchProductPage();
  }

  fetchProductPage(pageNumber: number = 0) {
    this.isFetching = true;

    const subscription = this.productsService.getProducts(
      pageNumber,
      this.productsPage.pageSize,
      this.sortBy,
      this.order,
      this.filterActive ? this.filters : undefined
    ).subscribe({
      next: (page) => this.productsPage = {...page},
      error: error => console.error(error),
      complete: () => {
        this.isFetching = false;
        window.scrollTo(0, 0);
      }
    })

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  onSetFilters(filters: { minPrice?: number; maxPrice?: number; query?: string }) {
    this.filters = filters;
    this.filterActive = true;
    this.fetchProductPage();
  }

  onSortingOptionChange(selectedSorting: string) {
    switch (selectedSorting) {
      case "name-asc":
        this.sortBy = "productName";
        this.order = "asc";
        break;
      case "name-desc":
        this.sortBy = "productName";
        this.order = "desc";
        break;
      case "price-asc":
        this.sortBy = "price";
        this.order = "asc";
        break;
      case "price-desc":
        this.sortBy = "price";
        this.order = "desc";
        break;
    }
    this.fetchProductPage();
  }

  onPageChange(newPage: number) {
    this.fetchProductPage(newPage);
  }
}
