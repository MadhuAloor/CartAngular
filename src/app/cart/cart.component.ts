import { Product } from "./../product";
import { cartService } from "./../cart-service.service";
import { Component } from "@angular/core";
import { OnInit, OnDestroy, Input } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { CartState } from "./../cart-state";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  loaded: boolean = true;
  products: Product[];
  private subscription: Subscription;
  constructor(private _cartService: cartService) {}
  ngOnInit() {
    this.subscription = this._cartService.CartState.subscribe(
      (state: CartState) => {
        this.products = state.products;
        console.log(this.products);
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
