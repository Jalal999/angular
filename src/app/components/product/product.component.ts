import { Component, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';
import { CartService } from '../../services/cart/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';

export interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
  image?: string;
  amount?: number;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() rendering: ComponentRendering;
  public showDialog: boolean = false;

  constructor(private cartService: CartService, public dialog: MatDialog) { }

  public addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.dialog.open(ProductDialogComponent);
  }

}