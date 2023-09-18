import { Component, Input } from '@angular/core';
import { Item } from 'src/app/list/item.module';
import { CartService } from '../cart.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css']
})
export class CartitemComponent {
@Input() CartItem!:Item;

  constructor(private cart:CartService , private appl: AppService){

  }
  get CartPer(){
    return this.cart.CartPermission;
  }

  RemoveItem(){
    this.appl.RemoveItemFromCart(this.CartItem);
  }

}
