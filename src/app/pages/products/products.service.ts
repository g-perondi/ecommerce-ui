import {Injectable} from '@angular/core';
import {T_SHIRTS} from '../../../../t-shirts';
import {Product} from './product.model';
import {Observable, of} from 'rxjs';
import {ProductsPage} from './products-page.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly products: Product[] = T_SHIRTS;

  getProducts(pageNumber: number, size: number = 20): Observable<ProductsPage> {
    const totalElements = this.products.length;
    const totalPages = Math.ceil(totalElements / size);
    const isLastPage = (pageNumber === totalPages);
    const start = (pageNumber * size) - size;
    const end = start + size < this.products.length ? start + size : this.products.length;
    const content = this.products.slice(start, end);

    const page: ProductsPage = {
      content: content,
      pageNumber: pageNumber,
      pageSize: size,
      totalElements: totalElements,
      totalPages: totalPages,
      isLastPage: isLastPage
    };

    return of(page);
  }

}
