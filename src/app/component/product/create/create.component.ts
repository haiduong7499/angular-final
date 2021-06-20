import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  filePath:string = "assets/image/";
  event?:any;
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
  }

  onSubmit() {
    if (this.infoGame.status === "INVALID") {
      console.log('khong submit dc dau');
    }
    else { console.log(this.infoGame.value); }
  }

  handleUploadImage(e:any) {
    console.log(this.filePath+ e.target.files[0].name);
  }
}
