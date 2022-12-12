import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  public name : string = 'Coffee Bean';
  private price : number = 4.20;
  public formattedPrice : string = formatNumber(this.price, 'en-US', '.2')

  constructor() { }

  ngOnInit(): void {
  }

}
