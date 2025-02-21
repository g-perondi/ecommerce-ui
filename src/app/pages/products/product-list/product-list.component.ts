import { Component, inject, Input } from "@angular/core";
import { Product } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: "app-product-list",
  standalone: false,
  template: `
    <div class="flex flex-wrap gap-6 justify-evenly sm:mx-5">

      <div
        *ngFor="let product of products; trackBy: trackByFn"
        class="md:w-2/7 lg:w-2/9 xl:w-2/11 shadow-md rounded-lg flex flex-col items-center bg-white md:hover:scale-110 transition-transform duration-500">
        <app-product-card (click)="onCardClicked(product.productId)" [product]="product" />
      </div>

    </div>
  `,
  styles: []
})
export class ProductListComponent {

  private readonly router: Router = inject(Router);

  @Input() products?: Product[];

  async onCardClicked(productId: number) {
    try {
      const success = await this.router.navigate([`/products/${ productId }`]);
      if (success) {
        console.log('success');
      } else {
        console.log('fail');
      }
    } catch (error) {
      console.error('error', error);
    }
  }

  trackByFn(index: number, product: Product): number {
    return product.productId;
  }

}
