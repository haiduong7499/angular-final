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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CarouselComponent,
    ContentComponent,
    FooterComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
