import { Product } from './common/product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  product: Product =  {
    name: 'S21',
    quantity: 200,
    price: 500
  }
}
