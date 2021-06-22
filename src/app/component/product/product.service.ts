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
      "Crypto",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "1.jpg"
    ),
    new Product(
      "Product 2",
      "Evening Starter",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "2.jpg"
    ),
    new Product(
      "Product 4",
      "Starts SLIDE",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "3.jpg"
    ),
    new Product(
      "Product 5",
      "Color Souls",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "4.jpg"
    ),
    new Product(
      "Product 6",
      "Puzzle Light",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "5.jpg"
    ),
    new Product(
      "Product 7",
      "Fluffy Cubed",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "6.jpg"
    ),
    new Product(
      "Product 8",
      "Story Brayyl",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "7.jpg"
    ),
    new Product(
      "Product 9",
      "Quin",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "8.jpg"
    ),
    new Product(
      "Product 10",
      "Luvsie",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "9.jpg"
    ),
    new Product(
      "Product 11",
      "Higgs Hboson",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "10.jpg"
    ),
    new Product(
      "Product 12",
      "Skip Lake",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "11.jpg"
    ),
    new Product(
      "Product 13",
      "Planet Surf",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "12.jpg"
    ),
    new Product(
      "Product 14",
      "Chicken Holmes",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "13.jpg"
    ),
    new Product(
      "Product 15",
      "Soko",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "14.jpg"
    ),
    new Product(
      "Product 16",
      "Shadownest",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "15.jpg"
    ),
    new Product(
      "Product 17",
      "Catarro",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "16.jpg"
    ),
    new Product(
      "Product 18",
      "WW1",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "17.jpg"
    ),
    new Product(
      "Product 19",
      "Counter Strike",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "18.jpg"
    ),
    new Product(
      "Product 20",
      "Dota 2",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "19.jpg"
    ),
    new Product(
      "Product 21",
      "PUBG",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "20.jpg"
    ),
    new Product(
      "Product 22",
      "GTA V",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "21.jpg"
    ),
    new Product(
      "Product 23",
      "Dark Souls III",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "22.jpg"
    ),
    new Product(
      "Product 24",
      "The Hunter",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "23.jpg"
    ),
    new Product(
      "Product 25",
      "Jump Force",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "24.jpg"
    ),
    new Product(
      "Product 26",
      "Tenken 7",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "25.jpg"
    ),
    new Product(
      "Product 27",
      "Wave Break",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "26.jpg"
    ),
    new Product(
      "Product 28",
      "Lilly's Rescue",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "27.jpg"
    ),
    new Product(
      "Product 29",
      "Kinkoi",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "28.jpg"
    ),
    new Product(
      "Product 30",
      "Loli con",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "29.jpg"
    ),
    new Product(
      "Product 31",
      "Class of 09",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "30.jpg"
    ),
    new Product(
      "Product 32",
      "Hell",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "31.jpg"
    ),
    new Product(
      "Product 33",
      "Disc Golf",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "32.jpg"
    ),
    new Product(
      "Product 34",
      "Edge of Eternity",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "33.jpg"
    ),
    new Product(
      "Product 35",
      "Train of Wishes",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "34.jpg"
    ),
    new Product(
      "Product 36",
      "Cat Slide Tiles",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "35.jpg"
    ),
    new Product(
      "Product 37",
      "Mighty Goose",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "36.jpg"
    ),
    new Product(
      "Product 38",
      "Skinwalker Hunt",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "37.jpg"
    ),
    new Product(
      "Product 39",
      "Garbage",
      "Tro nay hay lam",
      200,
      "Steam",
      this.filePath + "38.jpg"
    ),
    new Product(
      "Product 3",
      "Sniper",
      "Tro nay hay lam",
      300,
      "Steam",
      this.filePath + "39.jpg"
    ),
    new Product(
      "Product 40",
      "Suicide",
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
