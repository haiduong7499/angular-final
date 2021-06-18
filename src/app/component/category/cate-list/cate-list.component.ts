import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-cate-list',
  templateUrl: './cate-list.component.html',
  styleUrls: ['./cate-list.component.css']
})
export class CateListComponent implements OnInit {
  categories: Category[] = [];
  constructor(
    public categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  totalLength?: number;
  page: number = 1;

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
    this.totalLength = this.categoryService.getCategories().length;

    console.log(this.categories);
  }

  onNewCategory() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }



}
