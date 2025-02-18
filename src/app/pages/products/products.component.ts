import {Component, DestroyRef, inject, OnInit} from "@angular/core";
import {ProductsService} from './products.service';
import {type ProductsPage} from './products-page.model';

@Component({
  selector: "app-products",
  standalone: false,
  template: `
    <div class="flex flex-col gap-6 items-center justify-center px-5 bg-zinc-200 full-screen">

      <app-filter-bar (filtersSet)="onSetFilters($event)" (sortingOptionChanged)="onSortingOptionChange($event)"/>

      <app-product-list [products]="productsPage.content"/>

      <app-pagination (pageChanged)="onPageChange($event)" [currentPage]="productsPage.pageNumber"
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

  productFilters?: { minPrice?: number; maxPrice?: number; query?: string };
  selectedSorting: string = "name-asc";

  ngOnInit(): void {
    this.fetchProductPage(1, 15);
  }

  onSetFilters(filters: { minPrice?: number; maxPrice?: number; query?: string }) {
    this.productFilters = filters;
    console.log(this.productFilters);
  }

  onSortingOptionChange(selectedSorting: string) {
    this.selectedSorting = selectedSorting;
    console.log(this.selectedSorting);
  }

  onPageChange(newPage: number) {
    this.fetchProductPage(newPage, this.productsPage.pageSize);
  }

  fetchProductPage(pageNumber: number, pageSize: number) {
    this.isFetching = true;
    const subscription = this.productsService.getProducts(pageNumber, pageSize).subscribe({
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
      }
    })

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

}
