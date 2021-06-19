import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-create-cate',
  templateUrl: './create-cate.component.html',
  styleUrls: ['./create-cate.component.css']
})
export class CreateCateComponent implements OnInit {
  idCategory!: number;
  editMode = false;
  categoryForm?: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router,
    private fb: FormBuilder
    ) {}

  cateGames = this.fb.group({
    "idCategory": ["", [Validators.required]],
    "nameCategory": ["", [Validators.required]],
    "description": ["", [Validators.required]],
  })

  get form() {
    return this.cateGames.controls;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idCategory = +params['idCategory'];
      this.editMode = params['idCategory'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let idCategory= '';
    let nameCategory = '';
    let description = '';

    if(this.editMode) {
      const category = this.categoryService.getCategory(this.idCategory);
      nameCategory = category.nameCategory;
      idCategory = category?.idCategory;
      description = category.description;
    }
    this.cateGames.controls;
  }

  onSubmit() {
    if(this.editMode){
      this.categoryService.updateCategory(this.idCategory, this.cateGames.value);
      console.log("Edit:" + [this.idCategory, this.cateGames.value, this.categoryService.updateCategory(this.idCategory, this.cateGames.value)]);
    }
    else{
      this.categoryService.addCategory(this.cateGames.value);
      console.log("Add:" + [this.cateGames.value, this.categoryService.updateCategory(this.idCategory, this.cateGames.value)]);

    }
    this.onCancel();

    // if (this.cateGames.status === "INVALID") {
    //   console.log('khong submit dc dau');
    // }
    // else { console.log(this.cateGames.value); }
  }
  onCancel(){
    this.router.navigate(["../"], {relativeTo: this.route});
  }
}
