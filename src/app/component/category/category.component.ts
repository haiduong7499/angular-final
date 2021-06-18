import { Component, OnInit } from '@angular/core';
import { Category } from './category.model';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}
  selectedCategory?: Category;
  ngOnInit() {
    this.categoryService.categorySelected.subscribe((category: Category) => {
      this.selectedCategory = category;
    });
  }
}
