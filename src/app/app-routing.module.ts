import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';
import { UserProfileModule } from './user-profile/user-profile.module';

const routes: Routes = [
  { path: "", redirectTo: '/home', pathMatch: 'full' },
  { path: "home", loadChildren: () => HomeModule },
  { path: 'products', loadChildren: () => ProductsModule },
  { path: 'profile', loadChildren: () => UserProfileModule },
  { path: '**', redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
