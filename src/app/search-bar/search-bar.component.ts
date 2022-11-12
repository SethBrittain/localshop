import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleCategoryDropdown(): void {
    let dropdowns = document.querySelectorAll('.dropdown-menu');
    for (let i=0; i<dropdowns.length; i++) { if (dropdowns[i].id != "category-dropdown") dropdowns[i].classList.remove('show'); }
    let dropdown : HTMLButtonElement | null = document.querySelector('#category-dropdown');
    dropdown?.classList.toggle('show');
  }
}
