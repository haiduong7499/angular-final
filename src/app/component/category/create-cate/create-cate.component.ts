import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-cate',
  templateUrl: './create-cate.component.html',
  styleUrls: ['./create-cate.component.css']
})
export class CreateCateComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  cateGames = this.fb.group({
    "idCategory": ["", [Validators.required]],
    "nameCategory": ["", [Validators.required]],
    "Description": ["", [Validators.required]],
  })

  get form() {
    return this.cateGames.controls;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.cateGames.status === "INVALID") {
      console.log('khong submit dc dau');
    }
    else { console.log(this.cateGames.value); }
  }
}
