import { Component, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';
import { FormControl } from '@angular/forms';
import { CartService } from '../../services/cart/cart.service';

export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  imgPath?: string;
  amount?: number;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() rendering: ComponentRendering;
  @Input() formControl: FormControl;
  // public amount = new FormControl('')
  public showDialog: boolean = false;

  constructor(private cartService: CartService) { }

  public addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.showDialog = true;
    console.log('worksss')
  }
}