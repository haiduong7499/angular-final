import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../category.model';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-cate-item',
  templateUrl: './cate-item.component.html',
  styleUrls: ['./cate-item.component.css']
})
export class CateItemComponent implements OnInit {
  @Input() category?: Category;
  @Input() index?: number;
  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
  }

}
