import { Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { AppService } from '../app.service';
import { Item } from '../list/item.module';
import { CartService } from './cart.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnChanges{
  myCart!:Item[];
  

  constructor(private appl:AppService, private cart:CartService, private cdr:ChangeDetectorRef){
    this.myCart= this.appl.CartArray;

    
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

  get CartPer(){
    return this.cart.CartPermission;
  }
  
  setCartPermission(){
    this.cart.setCartPermissionChange();
  }

}