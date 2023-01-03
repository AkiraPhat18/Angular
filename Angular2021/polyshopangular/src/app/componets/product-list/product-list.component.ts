import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

//định nghĩa lớp
export class ProductListComponent implements OnInit {
  products : Product[] = [
    new Product('P01','SmartPhone'),
    new Product('P02','Laptop')
  ]
  constructor() { }

  changeStarRating (message: String) {
    console.log(`Message: ${message}`);
  }

  ngOnInit() {
  }

}
