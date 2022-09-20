import { Injectable } from '@angular/core';

export interface CartItemType {
  productId: number,
  productName: string,
  productPrice: number, 
  productDescription: string,
  productImg?: string,
  productCount: number
}

export interface ProductType {
  id: number;
  title: string;
  price: number;
  description?: string;
  image?: string;
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
        productName: product.title,
        productPrice: product.price,
        productDescription: product.description!,
        productImg: product.image,
        productCount: product.amount
      });
    }
  }

  public getCartItems(): CartItemType[] {
    return this.cartItems;
  }

  public deleteItem(id: number): void {
    console.log('woorks')
    this.cartItems = this.cartItems.filter(item => item.productId !== id)
    this.cartItems!.forEach((element, index) => {
      if(element.productId === id) {
        console.log('check equality')
        this.cartItems!.splice(index, 1);
      }
    }); 
  }

}