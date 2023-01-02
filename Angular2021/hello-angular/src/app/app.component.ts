//import { Product_listComponent } from './components/product_list/product_list.component';
import { Product } from './common/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  product :Product =  {
    name: 'S21',
    quantity: 200,
    price: 500
  }
}



