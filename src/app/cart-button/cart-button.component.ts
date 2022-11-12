import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.css']
})
export class CartButtonComponent implements OnInit {
  public test : string = 'Cart (0)';

  constructor() { }

  ngOnInit(): void {
  }

}
