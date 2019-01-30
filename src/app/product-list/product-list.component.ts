import { Product } from "./../product";

import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  loaded: boolean = true;
  Products: Product[];
  URL : string;

  constructor(private httpClient: HttpClient) {
    this.URL ='./assets/products.json';
  }

  ngOnInit() {
      this.httpClient.get(this.URL)
          .subscribe((result:any) => {
              this.Products = result.data;
          });
  }
}
