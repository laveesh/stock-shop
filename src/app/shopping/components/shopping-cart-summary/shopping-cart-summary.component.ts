import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from 'src/app/shared/models/shopping-cart';

@Component({
  selector: 'app-shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.scss']
})
export class ShoppingCartSummaryComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('cart') cart: ShoppingCart;

  constructor() {}

  ngOnInit() {}
}
