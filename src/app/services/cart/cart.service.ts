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

    for (let i=0; i < this.cartItems!.length; i++) {
      if (Object.values(this.cartItems![i].productId)[0] === Object.values(product.id)[0]) {
        console.log("Updated amount", Number(Object.values(this.cartItems![i].productCount)[0]) + Number(Object.values(product.amount)[0]))
        Object.values(this.cartItems[i].productCount)[0] = Number(Object.values(this.cartItems![i].productCount)[0]) + Number(Object.values(product.amount)[0]);
        productInCart = true;
        break;
      }
    }

    if (!productInCart) {
      console.log('product count: ', product.amount)

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
    this.cartItems = this.cartItems.filter(item => item.productId !== id)
    this.cartItems!.forEach((element, index) => {
      if(element.productId === id) {
        this.cartItems!.splice(index, 1);
      }
    }); 
  }

  public getTotalCost(): number {
    this.totalCost = 0;
    this.cartItems!.forEach((element) => {
      this.totalCost += Object.values(element.productCount)[0]*Object.values(element.productPrice)[0];
    })
    console.log(this.totalCost)
    return this.totalCost;
  }

  public updateCart(id: number, count: number): void {
    this.cartItems!.forEach((element) => {
      if (element.productId === id) {
        element.productCount = count;
      }
    })
  }
}