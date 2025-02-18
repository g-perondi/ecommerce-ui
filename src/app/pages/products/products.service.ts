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

  getProducts(pageNumber: number, pageSize: number = 20): Observable<ProductsPage> {
    const totalElements = this.products.length;
    const totalPages = Math.ceil(totalElements / pageSize);
    const isLastPage = pageNumber === totalPages;

    const startIdx = (pageNumber * pageSize) - pageSize;
    const endIdx = startIdx + pageSize < totalElements ? startIdx + pageSize : totalElements;
    const content = this.products.slice(startIdx, endIdx);

    const page: ProductsPage = {
      content: content,
      pageNumber: pageNumber,
      pageSize: pageSize,
      totalElements: totalElements,
      totalPages: totalPages,
      isLastPage: isLastPage
    };

    return of(page);
  }

}
