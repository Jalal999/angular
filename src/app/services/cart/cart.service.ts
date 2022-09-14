import { Injectable } from '@angular/core';

export interface CartItemType {
  productId: number,
  productName: string,
  productPrice: number, 
  productDesc: string,
  productImg?: string,
  productCount: number
}

export interface ProductType {
  id: number;
  name: string;
  price: number;
  description?: string;
  imgPath?: string;
  amount?: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems?: CartItemType[] = [];
  // private totalCost: number = 0;

  constructor() { }

  public addToCart(product: ProductType): void {
    let productInCart = false;

    for (let i=0; i < this.cartItems!.length; i++) {
      if (this.cartItems![i].productId === product.id) {
        this.cartItems![i].productCount += product.amount;
        productInCart = true;
        break;
      }
    }

    if (!productInCart) {
      this.cartItems?.push({
        productId: product.id,
        productName: product.name,
        productPrice: product.price,
        productDesc: product.description!,
        productImg: product.imgPath,
        productCount: product.amount
      });
    }
  }

  public getCartItems(): CartItemType[] {
    return this.cartItems;
  }
}