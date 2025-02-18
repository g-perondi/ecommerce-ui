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

  getProducts(
    pageNumber: number,
    pageSize: number,
    sortBy: keyof Product,
    order: "asc" | "desc"
  ): Observable<ProductsPage> {
    const sortedProducts = [...this.products];

    if (sortBy) {
      this.sortProducts(sortedProducts, sortBy, order);
    }

    const totalElements = sortedProducts.length;
    const totalPages = Math.ceil(totalElements / pageSize);
    const isLastPage = pageNumber === totalPages;

    const startIdx = (pageNumber * pageSize) - pageSize;
    const endIdx = startIdx + pageSize < totalElements ? startIdx + pageSize : totalElements;

    const content = sortedProducts.slice(startIdx, endIdx);

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

  getProductsFiltered(
    pageNumber: number,
    pageSize: number,
    sortBy: keyof Product,
    order: "asc" | "desc",
    filters: { minPrice?: number; maxPrice?: number; query?: string }
  ): Observable<ProductsPage> {
    let filteredProducts = [...this.products];

    if (filters.minPrice) {
      filteredProducts = filteredProducts.filter(product => product.special_price >= filters.minPrice!);
    }
    if (filters.maxPrice) {
      filteredProducts = filteredProducts.filter(product => product.special_price <= filters.maxPrice!);
    }
    if (filters.query) {
      const queryLower = filters.query.toLowerCase();
      filteredProducts = filteredProducts.filter(product =>
        product.product_name.toLowerCase().includes(queryLower)
      );
    }

    if (sortBy) {
      filteredProducts = this.sortProducts(filteredProducts, sortBy, order);
    }

    const totalElements = filteredProducts.length;
    const totalPages = Math.ceil(totalElements / pageSize);
    const isLastPage = pageNumber === totalPages;

    const startIdx = (pageNumber * pageSize) - pageSize;
    const endIdx = startIdx + pageSize < totalElements ? startIdx + pageSize : totalElements;

    const content = filteredProducts.slice(startIdx, endIdx);

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

  private sortProducts(arr: Product[], sortBy: keyof Product, order: "asc" | "desc"): Product[] {
    return arr.sort((a: Product,b: Product) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];
      if (typeof aValue === "string" && typeof bValue === "string") {
        return order === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      if (typeof aValue === "number" && typeof bValue === "number") {
        return order === "asc"
          ? aValue - bValue
          : bValue - aValue;
      }
      return 0;
    });
  }

}
