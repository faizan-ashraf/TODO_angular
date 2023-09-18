import { Component, Input } from '@angular/core';
import { Item } from '../item.module';
import { Itemservice } from '../items.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input() Det!:Item;

  BOOL:boolean= false;

  constructor(private data:Itemservice , private appl:AppService){
    this.Det = this.data.DetailVariableData;
    
  }
  setCondition(b:boolean){
    this.data.Condition=!this.data.Condition;
  }

  get DetailName(){
    return this.data.DetailVariable.name;
  }
  get DetailImage(){
    return this.data.DetailVariable.image;
  }
  get DetailPrice(){
    return this.data.DetailVariable.price;
  }
  get DetailDetail(){
    return this.data.DetailVariable.desc;
  }

  addCartItem(){
    this.appl.setCartItem(this.Det);
    alert('CartAdded');
  }
  
}
