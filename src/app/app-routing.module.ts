import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './component/category/category.component';
import { CreateCateComponent } from './component/category/create-cate/create-cate.component';
import { CreateComponent } from './component/product/create/create.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: ':idProduct/edit',
        component: CreateComponent
      },
    ]
  },
  {
    path: 'create',
    component: CreateComponent
  },

  {
    path: 'create-cate',
    component: CreateCateComponent,
  },
  {
    path: 'category/:idCategory/edit',
    component: CreateCateComponent
  },
  {
    path: 'category',
    component: CategoryComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
