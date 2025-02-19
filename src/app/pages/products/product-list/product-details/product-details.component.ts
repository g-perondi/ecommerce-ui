import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../product.model';
import { ProductsService } from '../../products.service';
import { switchMap } from 'rxjs';

@Component({
  selector: "app-product-details",
  template: `
    <div class="py-8 bg-white md:py-16 antialiased full-screen">
      <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div *ngIf="product" class="md:grid md:grid-cols-2 md:gap-8 xl:gap-16">

          <div class="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img class="w-2/3 mx-auto" src="assets/images/t-shirts/{{ this.product.image }}" alt="product image"
                 height="200"/>
          </div>

          <div class="mt-6 sm:mt-8 lg:mt-0">
            <h1
              class="text-xl font-semibold text-gray-900 sm:text-2xl"
            >
              {{ this.product.productName }}
            </h1>
            <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p
                class="text-2xl font-extrabold text-gray-900 sm:text-3xl"
              >
                {{ this.product.specialPrice | currency }}
              </p>

            </div>

            <hr class="my-6 md:my-8 border-gray-200 dark:border-gray-800"/>

            <p class="mb-6 text-gray-500 dark:text-gray-400">
              {{ this.product.description }}
            </p>

            <div class="w-full flex md:flex-row flex-col mt-10 md:mt-20 gap-6">
              <button
                class="flex w-full md:w-1/3 items-center justify-center rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">
                Add to Cart
              </button>
              <button (click)="onClickBack()"
                      class="flex w-full md:w-1/3 items-center justify-center rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">
                Back to browse
              </button>

            </div>

          </div>

        </div>
      </div>

    </div>

  `,
  standalone: false,
  styles: []
})
export class ProductDetailsComponent implements OnInit {

  product!: Product | null;
  isLoading: boolean = false;

  private route = inject(ActivatedRoute);
  private router: Router = inject(Router);
  private productService = inject(ProductsService);

  ngOnInit() {
    this.isLoading = true;
    this.route.params.pipe(
      switchMap(params => {
        const productId = Number(params['id']);
        return this.productService.getProductById(productId);
      })
    ).subscribe({
      next: (product) => this.product = product,
      error: (err) => {
        console.error('Error loading product:', err);
        this.product = null;
      },
      complete: () => this.isLoading = true

    });
  }

  onClickBack() {
    this.router.navigate([`/products`]);
  }

}
