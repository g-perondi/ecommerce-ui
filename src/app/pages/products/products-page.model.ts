import {Product} from './product.model';

export interface ProductsPage {
  content: Product[];
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  isLastPage: boolean;
}
