import { Injectable } from '@angular/core';
import { Item } from './list/item.module';

@Injectable({
  providedIn: 'root'
})
export class AppService{
    cart: Item[] = [];
    navigator : string = 'Home';
    subNav:string = 'HomeOn';
    search: string = '';

    cartBool:boolean = true;

    RemoveItemFromCart(rem:Item){
        this.cart = this.cart.filter(item => item !== rem);
    }
    get NavValue(){
        return this.navigator;
    }
    setNavValue(val:string){
        this.navigator=val;
    }

    setCartItem(bil:Item){
        this.cart.push(bil);
    }
    get CartArray():Item[]{
        return this.cart;
    }
    setSubNav(sub:string){
        this.subNav=sub;
    }

    setCartBool(b:boolean){
        this.cartBool=b;
    }

    get CartBool(){
        return this.cartBool;
    }
}