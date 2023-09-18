import { Injectable } from '@angular/core';
import { Item } from './item.module';

@Injectable({
  providedIn: 'root'
})
export class Itemservice{
    DetailVariable!: Item;
    Condition :boolean = false;

    ItemsHave !: Item ;

    setDetailVariable(data:Item){
        this.DetailVariable = data;
    }
    get DetailVariableData(){
        return this.DetailVariable;
    }
}