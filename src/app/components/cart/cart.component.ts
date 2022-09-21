import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';
import { CartItemType, CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() rendering: ComponentRendering;
  public cartItems: CartItemType[];
  public totalCost = this.cartService.getTotalCost();

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  public isCartNotEmpty(): boolean {
    return this.cartItems.length > 0 ? true : false
  }

  public deleteItem(productID: number): void {
    this.cartService.deleteItem(productID.valueOf());
    this.cartItems = this.cartService.getCartItems();
    this.totalCost = this.cartService.getTotalCost();
  }

  public updateCart(productId: number, productCount: number): void {
    this.cartService.updateCart(productId, productCount);
    this.totalCost = this.cartService.getTotalCost(); 
  }
}
