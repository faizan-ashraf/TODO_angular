import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO';
  constructor(private appl:AppService){

  }
  get NavigatorValue(){
    return this.appl.NavValue;
  }

  get CartBool(){
    return this.appl.CartBool;
  }
}
