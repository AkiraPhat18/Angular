import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { Product_listComponent } from './components/product_list/product_list.component';

@NgModule({
  declarations: [
    AppComponent
    //Product_listComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
