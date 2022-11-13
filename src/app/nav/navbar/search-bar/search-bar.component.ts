import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private SearchService : SearchService) { }

  ngOnInit(): void {
  }

  toggleCategoryDropdown(): void {
    let dropdowns = document.querySelectorAll('.dropdown-menu');
    for (let i=0; i<dropdowns.length; i++) { if (dropdowns[i].id != "category-dropdown") dropdowns[i].classList.remove('show'); }
    let dropdown : HTMLButtonElement | null = document.querySelector('#category-dropdown');
    dropdown?.classList.toggle('show');
  }

  searchProducts() : void {
    window.location.href = "/search";
    let input : HTMLInputElement | null = document.querySelector("#item-search-bar");
    let query = input?.value;
    if (query != null) { this.SearchService.searchQuery(query); }
    console.log('test');
  }

  searchBusinesses() : void {

  }
}
