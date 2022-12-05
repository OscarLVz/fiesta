import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home/home.component';
import { SearchComponent } from './components/public/home/search/search.component';
import { NavbarComponent } from './components/public/navbar/navbar.component';
import { CategoriesComponent } from './components/public/home/categories/categories.component';
import { TopServicesComponent } from './components/public/home/top-services/top-services.component';
import { FooterComponent } from './components/public/footer/footer.component';
import { NavMenuComponent } from './components/public/navbar/nav-menu/nav-menu.component';
import { CategoriesListComponent } from './components/public/categories-list/categories-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    CategoriesComponent,
    TopServicesComponent,
    FooterComponent,
    NavMenuComponent,
    CategoriesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
