import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeModule} from "./pages/home/home.module";
import {ProductsModule} from "./pages/products/products.module";
import {UserProfileModule} from "./pages/user-profile/user-profile.module";
import {LayoutComponent} from "./shared/components/layout/layout.component";
import {CartModule} from './pages/cart/cart.module';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {path: "", redirectTo: "", pathMatch: "full"},
      {path: "", loadChildren: () => HomeModule},
      {path: "products", loadChildren: () => ProductsModule},
      {path: "cart", loadChildren: () => CartModule},
      {path: "profile", loadChildren: () => UserProfileModule},
    ]
  },
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
