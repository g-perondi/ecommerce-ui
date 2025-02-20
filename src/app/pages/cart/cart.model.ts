import { CartItem } from './cart-item-list/cart-item/cart-item.model';

export interface Cart {

  cartId?: number;
  totalPrice: number;
  cartItems: CartItem[];

}
