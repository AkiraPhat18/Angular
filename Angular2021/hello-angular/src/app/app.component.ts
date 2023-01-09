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

public persons =  [
    {name_employee: 'Phát', position: 'Junior BA', salary: 1000},
    {name_employee: 'Linh', position: 'PM', salary: 2000},
    {name_employee: 'Tuấn', position: 'Dev', salary: 1000},
    {name_employee: 'Hà', position: 'Tester', salary: 4000}
];

  constructor() {}

  public ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('Nhân viên =',this.persons);
  }
}
