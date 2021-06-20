import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Category } from '../../category.model';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-cate-item',
  templateUrl: './cate-item.component.html',
  styleUrls: ['./cate-item.component.css']
})
export class CateItemComponent implements OnInit {
  @Input() category?: Category; //(1)
  @Input() index!: number;
  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    console.log("Name:" + this.category?.nameCategory); //(1)
   }

  delete() {
    this.categoryService.deleteCategory(this.index);
    this.router.navigate(['/category']);
    console.log("delete" + this.index);
  }
  Edit() {
    this.router.navigate([this.index + '/edit'], { relativeTo: this.route });
  }
}
