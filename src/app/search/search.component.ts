import { Component } from '@angular/core';
import { Item } from '../list/item.module';
import { AppService } from '../app.service';
import { ListService } from '../list/list.services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  search: string = '';
  dataToSearch: Item[] = [];
  bool: boolean = false;

  constructor(private appl: AppService, private list: ListService) {
    this.dataToSearch = this.list.Products;
  }

  onSearchPress() {
    this.appl.setNavValue('Search');
    this.bool = true;
    
    // Reset dataToSearch to its original state (if you have a copy of original data)
    this.dataToSearch = this.list.Products;

    // Apply the new search filter
    if (this.search) {
      this.dataToSearch = this.dataToSearch.filter(item =>
        item.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
  onSearchChange(n :string){
    if (n === '') {
      this.bool = false;
      this.appl.setNavValue('Home');
    }
  }
}


