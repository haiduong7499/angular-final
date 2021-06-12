import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  infoGame = this.fb.group({
    "gameName":["",[Validators.required]],
    "gameDescription":["",[Validators.required]],
    "gamePrice":["",[Validators.required]],
    "gamePlatform":["",[Validators.required]]
  })
  get form(){
    return this.infoGame.controls;
  }
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.infoGame.value);
  }
}
