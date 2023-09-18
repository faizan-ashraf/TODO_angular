import { Component } from '@angular/core';
import { Item } from './item.module';
import { Itemservice } from './items.service';
import { AppService } from '../app.service';
import { ListService } from './list.services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  Products: Item[];
  condition: boolean = false;
  constructor(private data:Itemservice,private appl:AppService, private list:ListService){
    this.Products = this.list.Products;
  }
  get ConditionFromService():boolean{
    this.data.Condition=!this.data.Condition;
    this.condition=!this.condition;
    this.appl.setSubNav('Details');
    return this.data.Condition;
  }
  get NavValue(){
    return this.appl.NavValue;
  }
  get subNavValue(){
    return this.appl.subNav;
  }

}