import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService{
    CartEdit:boolean = false;

    get CartPermission(){
        return this.CartEdit;
    }

    setCartPermissionChange(){
        this.CartEdit= ! this.CartPermission;
    }
}