import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Category } from '../../category/category.model';
import { CategoryService } from '../../category/category.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  filePath: string = "assets/image/";
  idProduct!: number;
  idCategory!: number;
  editMode = false;
  productForm?: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  infoGame = this.fb.group({
    "idProduct": ["", [Validators.required]],
    "nameProduct": ["", [Validators.required]],
    "description": ["", [Validators.required]],
    "price": ["", [Validators.required]],
    "category": ["", [Validators.required]],
    "image": ["", [Validators.required]]
  })
  get form() {
    return this.infoGame.controls;
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idProduct = +params['idProduct'];
      this.editMode = params['idProduct'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let idProduct = '';
    let nameProduct = '';
    let description = '';
    let price = '';
    let category = '';
    let image = '';

    if (this.editMode) {
      const product = this.productService.getProduct(this.idProduct);
      idProduct = product.idProduct;
      nameProduct = product.nameProduct;
      description = product.description;
      price = product.price.toString();
      category = product.category;
      image = product.image;
    }
    this.form;//this.infoGame.controls
  }

  onSubmit() {
    if (this.editMode) {
      this.infoGame.value.image = (this.infoGame.value.image).replace("C:\\fakepath\\", this.filePath);
      this.productService.updateProduct(this.idProduct, this.infoGame.value);
      this.router.navigate(["/"], {relativeTo: this.route});
      console.log("Edit" + [this.idProduct, this.infoGame.value]);
    }
    else {
      this.infoGame.value.image = (this.infoGame.value.image).replace("C:\\fakepath\\", this.filePath);
      this.productService.addProduct(this.infoGame.value);
      this.router.navigate(["/"], {relativeTo: this.route});
      console.log(this.infoGame.value.image);
    }
  }

  onCancel() {
    this.router.navigate(["../"], { relativeTo: this.route });
  }

  handleUploadImage(e: any) {
    console.log(this.filePath + e.target.files[0].name);
  }
  handleSelect(e: any) {
    console.log(e.target.value);
  }
}
