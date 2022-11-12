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
    let dropdown : HTMLButtonElement | null = document.querySelector('#location-dropdown');
    dropdown?.classList.toggle('show');
  }
}
