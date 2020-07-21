import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    const p1 = new Product('01', 'Name 01', 100 )
    const p2 = new Product('01', 'Name 01', 1000 )
    const p3 = new Product('01', 'Name 01', 10000 )

    this.products.push(p1,p2,p3);
  }

}
