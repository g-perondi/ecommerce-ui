import { Product } from '../../../products/product.model';

export interface CartItem {

  cartItemId: number;
  product: Product;
  quantity: number;
  productPrice: number;
  discount?: number;
  image?: string;

}
