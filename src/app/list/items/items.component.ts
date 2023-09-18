import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../item.module';
import { Itemservice } from '../items.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
@Input() Items!:Item;
Detail :Item = this.Items;
condition: boolean = true;
constructor(private data: Itemservice, private appl:AppService){

  this.data.Condition = true;
}
get ConditionFromService():boolean{
  return this.data.Condition;
}
setConditionService(b:boolean){
  this.data.Condition=!this.data.Condition;
  this.condition=!this.condition;
  this.data.setDetailVariable(this.Items);
}

addCartItem(){
  this.appl.setCartItem(this.Items);
  alert('CartAdded');
}

}
