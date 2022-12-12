import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'location-selector',
  templateUrl: './location-selector.component.html',
  styleUrls: ['./location-selector.component.css']
})
export class LocationSelectorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  toggleLocationDropdown() : void {
    let dropdowns = document.querySelectorAll('.dropdown-menu');
    for (let i=0; i<dropdowns.length; i++) { if (dropdowns[i].id != "location-dropdown") dropdowns[i].classList.remove('show'); }
    let dropdown : HTMLButtonElement | null = document.querySelector('#location-dropdown');
    dropdown?.classList.toggle('show');
  }
}
