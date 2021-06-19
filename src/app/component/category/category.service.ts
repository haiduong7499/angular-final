import { EventEmitter, Injectable } from '@angular/core';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categorySelected = new EventEmitter<Category>();
  private categories: Category[] = [
    new Category(
      'MB1',
      'Steam',
      'Have prime for competive ranking'
    ),
    new Category(
      'MB2',
      'Garena',
      'League of Legends'
    ),
  ];
  constructor() { }
  getCategories(){
    return this.categories;
  }
  getCategory(index: number){
    return this.categories[index];
  }
  addCategory(category: Category) {
    this.categories.push(category);
  }

  updateCategory(index: number, newCategory: Category) {
    this.categories[index] = newCategory;
  }

  deleteCategory(index: number) {
    this.categories.splice(index, 1);

}
}
