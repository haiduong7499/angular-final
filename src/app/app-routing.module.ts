import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './component/category/category.component';
import { CreateCateComponent } from './component/create-cate/create-cate.component';
import { CreateComponent } from './component/create/create.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'create',
    component:CreateComponent
  },
  {
    path:'create-cate',
    component:CreateCateComponent,
  },
  {
    path: 'category',
    component:CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
