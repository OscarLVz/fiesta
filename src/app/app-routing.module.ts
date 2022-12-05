import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './components/public/categories-list/categories-list.component';
import { HomeComponent } from './components/public/home/home.component';

const routes: Routes = [
  {path: 'categorias',      component: CategoriesListComponent},
  {path: '**',              component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
