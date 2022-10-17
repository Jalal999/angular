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
  private totalCost: number = 0;

  constructor() { }

  public addToCart(product: ProductType): void {
    let productInCart = false;

    for (let i = 0; i < this.cartItems!.length; i++) {
      if (this.cartItems![i].productId === Object.values(product.id)[0]) {
        this.cartItems[i].productCount += Object.values(product.amount)[0];
        productInCart = true;
        break;
      }
    }

    if (!productInCart) {
      if (isNaN(Object.values(product.amount)[0]) ||
        Object.values(product.amount)[0] <= 0 ||
        Object.values(product.amount)[0] === null) {
        this.cartItems?.push({
          productId: Object.values(product.id)[0],
          productName: Object.values(product.title)[0],
          productPrice: Object.values(product.price)[0],
          productDescription: Object.values(product.description)[0],
          productImg: Object.values(product.image)[0],
          productCount: 1
        });
      } else if (Object.values(product.amount)[0] > 10) {
        this.cartItems?.push({
          productId: Object.values(product.id)[0],
          productName: Object.values(product.title)[0],
          productPrice: Object.values(product.price)[0],
          productDescription: Object.values(product.description)[0],
          productImg: Object.values(product.image)[0],
          productCount: 10
        });
      }
      else {
        this.cartItems?.push({
          productId: Object.values(product.id)[0],
          productName: Object.values(product.title)[0],
          productPrice: Object.values(product.price)[0],
          productDescription: Object.values(product.description)[0],
          productImg: Object.values(product.image)[0],
          productCount: Object.values(product.amount)[0]
        });
      }
    }
  }

  public getCartItems(): CartItemType[] {
    return this.cartItems;
  }

  public deleteItem(id: number): void {
    this.cartItems = this.cartItems.filter(item => item.productId !== id)
    this.cartItems!.forEach((element, index) => {
      if (element.productId === id) {
        this.cartItems!.splice(index, 1);
      }
    });
  }

  public getTotalCost(): number {
    this.totalCost = 0;
    this.cartItems!.forEach((element) => {
      this.totalCost += element.productCount * element.productPrice;
    })
    return this.totalCost;
  }

  public updateCart(id: number, count: number): void {
    this.cartItems!.forEach((element) => {
      if (element.productId === id) {
        element.productCount = count;
      }
    })
  }

  public cleanCart(): void {
    this.cartItems = [];
  }
}