import {Injectable} from '@angular/core';
import {T_SHIRTS} from '../../../../t-shirts';
import {Product} from './product.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly products: Product[] = T_SHIRTS;

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

}
