import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewComponent } from './new/new.component';
//import { Product_listComponent } from './components/product_list/product_list.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponentComponent,
    PageNotFoundComponent,
    NewComponent
    //Product_listComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
