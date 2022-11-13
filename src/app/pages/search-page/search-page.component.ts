import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  public products : any;
  constructor(private searchService : SearchService) {}

  ngOnInit(): void {
    this.searchService.products.subscribe(data =>{
      this.products = data;
    });
  }
}
