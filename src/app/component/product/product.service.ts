import { EventEmitter, Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  filePath: string = "assets/image/";
  productSelected = new EventEmitter<Product>();
  private product: Product[] = [
    new Product(
      "Product 1",
      "CS:GO",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "5ffe81d740a1f.jpg"
    ),
    new Product(
      "Product 2",
      "League of Legends",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "600834d07c32e.jpg"
    ),
  ];
  constructor() { }
  getProducts(){
    return this.product;
  }
  getProduct(index: number){
    return this.product[index];
  }
}
