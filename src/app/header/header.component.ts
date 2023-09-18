import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { ListService } from '../list/list.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private appl:AppService, private item:ListService){

  }

  HomeNav(){
    this.appl.setNavValue('Home');
    this.appl.setSubNav('HomeOn');
    this.appl.setCartBool(true);
  }
  CartNav(){
    this.appl.setNavValue('Cart');
    this.appl.setCartBool(false);
  }
}
