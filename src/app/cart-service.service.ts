import { Product } from './product';
import { CartState } from './cart-state';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
const url = 'assets/products.json';
@Injectable({
  // we declare that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class cartService {
  constructor(private httpClient : HttpClient) {}
  private cartSubject = new Subject<CartState>();
    Products : Product[]= [];
    CartState = this.cartSubject.asObservable();
    addProduct(_product:any) {
      console.log('in service');
      this.Products.push(_product)
      this.cartSubject.next(<CartState>{loaded: true, products:  this.Products});
    }
    removeProduct(id:number) {
      this.Products = this.Products.filter((_item) =>  _item.id !== id )
      this.cartSubject.next(<CartState>{loaded: false , products:  this.Products});
    }

  getAllProducts() : Observable <any> {
    return this
      .httpClient
      .get(url)
      .map((res : Response) => res.json())
      .catch((error : any) => Observable.throw('Server error'));
  }

}