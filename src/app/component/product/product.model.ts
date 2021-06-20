export class Product{
  idProduct: string;
  nameProduct: string;
  description: string;
  price: number;
  category: string;
  image: string;
  constructor(idProduct: string, nameProduct: string, description: string,price: number, category: string,image: string){
    this.idProduct = idProduct;
    this.nameProduct = nameProduct;
    this.description = description;
    this.price = price;
    this.category = category;
    this.image = image;
  }
}
