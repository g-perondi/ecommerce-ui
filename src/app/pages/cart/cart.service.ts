import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from './cart.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = 'http://localhost:8080/api/v1/carts';
  private cartSubject = new BehaviorSubject<Cart>({cartItems: [], totalPrice: 0});

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  get(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  add(productId: number, quantity: number = 1) {
    this.http.post<Cart>(`${this.apiUrl}/products/${productId}?quantity=${quantity}`, {})
      .subscribe(cart => {
        console.log("Cart updated:", cart);
        this.update(cart);
      });
  }

  private update(cart: Cart) {
    this.cartSubject.next(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  removeFromCart(productId: number) {
    this.http.delete<Cart>(`${this.apiUrl}/products/${productId}`)
      .subscribe(cart => this.update(cart));
  }

  updateQuantity(cart: Cart) {
    this.http.put<Cart>(this.apiUrl, {})
      .subscribe(cart => this.update(cart));
  }

  clear() {
    this.update({ cartItems: [], totalPrice: 0 });
  }

  private loadFromLocalStorage() {
    const storedCart = localStorage.getItem('cart');
    if(storedCart) {
      this.cartSubject.next(JSON.parse(storedCart));
    }
  }
}
