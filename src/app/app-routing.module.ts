import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminBlogsComponent } from './admin/admin-blogs/admin-blogs.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { BasketComponent } from './pages/basket/basket.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'menu/pizza' },
  { path: 'home', component: HomeComponent },
  { path: 'menu/:category', component: ProductsComponent },
  { path: 'menu/:category/:id', component: ProductDetailsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'admin', component: AdminComponent, children: [
    { path: '', pathMatch: 'full', redirectTo: 'category' },
    { path: 'category', component: AdminCategoryComponent },
    { path: 'products', component: AdminProductsComponent },
    { path: 'blogs', component: AdminBlogsComponent },
  ] },
  { path: '**', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
