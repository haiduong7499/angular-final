import { EventEmitter, Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  filePath: string = "assets/image/";
  productSelected = new EventEmitter<Product>();
  private products: Product[] = [
    new Product(
      "Product 1",
      "CS:GO",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "1.jpg"
    ),
    new Product(
      "Product 2",
      "League of Legends",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "2.jpg"
    ),
    new Product(
      "Product 4",
      "CS:GO",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "3.jpg"
    ),
    new Product(
      "Product 5",
      "League of Legends",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "4.jpg"
    ),
    new Product(
      "Product 6",
      "CS:GO",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "5.jpg"
    ),
    new Product(
      "Product 7",
      "League of Legends",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "6.jpg"
    ),
    new Product(
      "Product 8",
      "CS:GO",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "7.jpg"
    ),
    new Product(
      "Product 9",
      "League of Legends",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "8.jpg"
    ),
    new Product(
      "Product 10",
      "CS:GO",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "9.jpg"
    ),
    new Product(
      "Product 11",
      "League of Legends",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "10.jpg"
    ),
    new Product(
      "Product 12",
      "CS:GO",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "11.jpg"
    ),
    new Product(
      "Product 13",
      "League of Legends",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "12.jpg"
    ),
    new Product(
      "Product 14",
      "CS:GO",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "13.jpg"
    ),
    new Product(
      "Product 15",
      "League of Legends",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "14.jpg"
    ),
    new Product(
      "Product 16",
      "CS:GO",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "15.jpg"
    ),
    new Product(
      "Product 17",
      "League of Legends",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "16.jpg"
    ),
    new Product(
      "Product 18",
      "CS:GO",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "17.jpg"
    ),
    new Product(
      "Product 19",
      "League of Legends",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "18.jpg"
    ),
    new Product(
      "Product 20",
      "CS:GO",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "19.jpg"
    ),
    new Product(
      "Product 21",
      "League of Legends",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "20.jpg"
    ),
    new Product(
      "Product 22",
      "CS:GO",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "21.jpg"
    ),
    new Product(
      "Product 23",
      "League of Legends",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "22.jpg"
    ),
    new Product(
      "Product 24",
      "CS:GO",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "23.jpg"
    ),
    new Product(
      "Product 25",
      "League of Legends",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "24.jpg"
    ),
    new Product(
      "Product 26",
      "CS:GO",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "25.jpg"
    ),
    new Product(
      "Product 27",
      "League of Legends",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "26.jpg"
    ),
    new Product(
      "Product 28",
      "CS:GO",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "27.jpg"
    ),
    new Product(
      "Product 29",
      "League of Legends",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "28.jpg"
    ),
    new Product(
      "Product 30",
      "CS:GO",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "29.jpg"
    ),
    new Product(
      "Product 31",
      "League of Legends",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "30.jpg"
    ),
    new Product(
      "Product 32",
      "CS:GO",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "31.jpg"
    ),
    new Product(
      "Product 33",
      "League of Legends",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "32.jpg"
    ),
    new Product(
      "Product 34",
      "CS:GO",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "33.jpg"
    ),
    new Product(
      "Product 35",
      "League of Legends",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "34.jpg"
    ),
    new Product(
      "Product 36",
      "CS:GO",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "35.jpg"
    ),
    new Product(
      "Product 37",
      "League of Legends",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "36.jpg"
    ),
    new Product(
      "Product 38",
      "CS:GO",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "37.jpg"
    ),
    new Product(
      "Product 39",
      "League of Legends",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "38.jpg"
    ),
    new Product(
      "Product 3",
      "CS:GO",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "39.jpg"
    ),
    new Product(
      "Product 40",
      "League of Legends",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "40.jpg"
    ),
  ];
  constructor() { }
  getProducts(){
    return this.products;
  }
  getProduct(index: number){
    return this.products[index];
  }
  addProduct(product: Product) {
    this.products.push(product);
  }

  updateProduct(index: number, newProduct: Product) {
    this.products[index] = newProduct;
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
}
}
