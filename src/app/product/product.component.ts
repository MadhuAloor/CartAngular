import { Product } from "./../product";
import { cartService } from "./../cart-service.service";
import { Component } from "@angular/core";
import { Input } from "@angular/core";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent {
  @Input()product : Product;
  constructor(private _cartService : cartService) {}
  AddProduct(_product : Product) {
      _product.added = true;
      this
          ._cartService
          .addProduct(_product);
  }
  RemoveProduct(_product : Product) {
      _product.added = false;
      this
          ._cartService
          .removeProduct(_product.id);
  }

}
