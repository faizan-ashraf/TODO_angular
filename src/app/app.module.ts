import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ItemsComponent } from './list/items/items.component';
import { DetailsComponent } from './list/details/details.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { CartitemComponent } from './cart/cartitem/cartitem.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemsComponent,
    DetailsComponent,
    HeaderComponent,
    CartComponent,
    CartitemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
