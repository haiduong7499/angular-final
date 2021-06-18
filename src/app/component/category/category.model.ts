export class Category {
  public idCategory: string;
  public nameCategory: string;
  public description: string;

  constructor(
    idCategory:string,
    nameCategory: string,
    description: string,

  ) {
    this.idCategory = idCategory,
    this.nameCategory = nameCategory;
    this.description = description;
  }
}
