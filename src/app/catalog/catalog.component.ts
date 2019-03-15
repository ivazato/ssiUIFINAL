import {Component, OnInit} from '@angular/core';
import {Item} from '../shared/item';
import {ItemService} from '../services/item.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  items: Item[];
  selectedItem;

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

}
