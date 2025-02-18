import {Component, DestroyRef, inject, OnInit} from "@angular/core";
import {ProductsService} from './products.service';
import {type ProductsPage} from './products-page.model';
import {type Product} from './product.model';

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

  isFetching: boolean = false;

  productsPage: ProductsPage = {
    content: [],
    pageNumber: 1,
    pageSize: 20,
    totalPages: 0,
    totalElements: 0,
    isLastPage: true
  };

  sortBy: keyof Product = "product_name";
  order: "asc" | "desc" = "asc";

  ngOnInit(): void {
    this.fetchProductPage(1, this.productsPage.pageSize, this.sortBy, this.order);
  }

  fetchProductPage(pageNumber: number, pageSize: number, sortBy: keyof Product, order: "asc" | "desc") {
    this.isFetching = true;

    const subscription = this.productsService.getProducts(pageNumber, pageSize, sortBy, order).subscribe({
      next: (page) => {
        this.productsPage.content = page.content;
        this.productsPage.pageNumber = page.pageNumber;
        this.productsPage.pageSize = page.pageSize;
        this.productsPage.totalElements = page.totalElements;
        this.productsPage.totalPages = page.totalPages;
        this.productsPage.isLastPage = page.isLastPage;
      },
      error: error => {
        console.error(error);
      },
      complete: () => {
        this.isFetching = false;
        window.scrollTo(0, 0);
      }
    })

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  onSetFilters(filters: { minPrice?: number; maxPrice?: number; query?: string }) {
    const subscription = this.productsService.getProductsFiltered(
      1,
      this.productsPage.pageSize,
      this.sortBy,
      this.order,
      filters
    ).subscribe({
      next: (page) => {
        this.productsPage.content = page.content;
        this.productsPage.pageNumber = page.pageNumber;
        this.productsPage.pageSize = page.pageSize;
        this.productsPage.totalElements = page.totalElements;
        this.productsPage.totalPages = page.totalPages;
        this.productsPage.isLastPage = page.isLastPage;
      },
      error: error => {
        console.error(error);
      },
      complete: () => {
        this.isFetching = false;
        window.scrollTo(0, 0);
      }
    })

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  onSortingOptionChange(selectedSorting: string) {
    let sortBy: keyof Product = this.sortBy;
    let order: "asc" | "desc" = this.order;

    switch (selectedSorting) {
      case "name-desc":
        order = "desc";
        break;
      case "price-asc":
        sortBy = "price";
        break;
      case "price-desc":
        sortBy = "price";
        order = "desc";
        break;
    }
    this.sortBy = sortBy;
    this.order = order;
    this.fetchProductPage(1, this.productsPage.pageSize, sortBy, order);
  }

  onPageChange(newPage: number) {
    this.fetchProductPage(newPage, this.productsPage.pageSize, this.sortBy, this.order);
  }

}
