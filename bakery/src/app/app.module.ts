import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MenuCarouselComponent } from './menu-carousel/menu-carousel.component';
import { AboutCarouselComponent } from './about-carousel/about-carousel.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    MenuComponent,
    ContactComponent,
    FooterComponent,
    MenuCarouselComponent,
    AboutCarouselComponent,
    MenuDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
