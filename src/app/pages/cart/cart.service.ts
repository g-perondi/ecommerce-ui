import { DestroyRef, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from './cart.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly apiUrl = 'http://localhost:8080/api/v1/carts';
  private readonly cartSubject = new BehaviorSubject<Cart>({cartItems: [], totalPrice: 0});

  constructor(private readonly http: HttpClient, private readonly destroyRef: DestroyRef) {
    this.loadFromLocalStorage();
  }

  get(): Observable<Cart> {
    const subscription = this.http.get<Cart>(`${this.apiUrl}`, { withCredentials: true })
      .subscribe(
        cart => {
          console.log("Cart fetched:", cart);
          this.updateLocalCart(cart);
        }
      );
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
    return this.cartSubject.asObservable();
  }

  addProduct(productId: number, quantity: number = 1) {
    const subscription = this.http.post<Cart>(`${this.apiUrl}/products/${productId}?quantity=${quantity}`, {}, { withCredentials: true })
      .subscribe(cart => {
        console.log("Cart updated:", cart);
        this.updateLocalCart(cart);
      });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  private updateLocalCart(cart: Cart) {
    this.cartSubject.next(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  removeProduct(productId: number) {
    const subscription = this.http.delete<Cart>(`${this.apiUrl}/products/${productId}`)
      .subscribe(cart => this.updateLocalCart(cart));
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  update(cart: Cart) {
    const subscription = this.http.put<Cart>(this.apiUrl, {cart})
      .subscribe(cart => this.updateLocalCart(cart));
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  clear() {
    this.updateLocalCart({ cartItems: [], totalPrice: 0 });
  }

  private loadFromLocalStorage() {
    const storedCart = localStorage.getItem('cart');
    if(storedCart) {
      this.cartSubject.next(JSON.parse(storedCart));
    }
  }
}
