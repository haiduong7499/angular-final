import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/home/header/header.component';
import { CarouselComponent } from './component/home/carousel/carousel.component';
import { ContentComponent } from './component/home/content/content.component';
import { FooterComponent } from './component/home/footer/footer.component';
import { CreateComponent } from './component/create/create.component';
import { CategoryComponent } from './component/category/category.component';
import { CreateCateComponent } from './component/category/create-cate/create-cate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CateItemComponent } from './component/category/cate-list/cate-item/cate-item.component';
import { CateListComponent } from './component/category/cate-list/cate-list.component';
import { CategoryService } from './component/category/category.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { ProductComponent } from './component/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CarouselComponent,
    ContentComponent,
    FooterComponent,
    CreateComponent,
    CategoryComponent,
    CreateCateComponent,
    CateItemComponent,
    CateListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
