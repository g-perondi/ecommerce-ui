import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { ProductsPage } from './products-page.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private getBaseUrl = "http://localhost:8080/api/v1/public/products";

  constructor(private http: HttpClient) {
  }

  getProducts(
    pageNumber: number,
    pageSize: number,
    sortBy: keyof Product,
    order: "asc" | "desc",
    filters?: { minPrice?: number; maxPrice?: number; query?: string }
  ): Observable<ProductsPage> {
    let params = new HttpParams()
      .set('page', (pageNumber).toString())
      .set('size', pageSize.toString())
      .set('sort', sortBy)
      .set('order', order);

    if (filters) {
      params = params
        .set('keyword', filters.query ? filters.query : "")
        .set('min', filters.minPrice ? filters.minPrice : "0")
        .set('max', filters.maxPrice ? filters.maxPrice : "99999");
    }

    const url = filters ? `${ this.getBaseUrl }/search` : this.getBaseUrl;

    return this.http.get<ProductsPage>(url, {params})
  }

  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${ this.getBaseUrl }/${ productId }`);
  }

}
