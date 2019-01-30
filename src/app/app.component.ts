import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({selector: 'my-app', 
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
           })
export class AppComponent implements OnInit {
    constructor(private httpClient : HttpClient) {
        this.URL ='./assets/products.json';
    }
    cart : Array<any> = [];
    URL : string;
    ngOnInit() {
        this.httpClient.get(this.URL)
            .subscribe((result:any) => {
                this.cart = result.data;
                console.log('result',result);
            });
    }

}