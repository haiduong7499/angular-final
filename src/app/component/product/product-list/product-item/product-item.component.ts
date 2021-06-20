import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../product.model';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product?: Product;
  @Input() index!: number;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {

  }
  delete() {
    this.productService.deleteProduct(this.index);
    this.router.navigate(['/']);
    console.log("delete: " + this.index);
  }
  edit(){
    this.router.navigate([this.index + '/edit'], { relativeTo: this.route })
    console.log("edit: " + this.index);
  }
}
