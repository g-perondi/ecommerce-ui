import {Product} from '../../../products/product.model';

export interface CartItem {

  cartItemId: number;
  product: Product;
  quantity: number;
  totalPrice: number;
  discount?: number;
  image?: string;

}
