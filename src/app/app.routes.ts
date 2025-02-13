import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { ProductsComponent } from './pages/products.component';

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "products", component: ProductsComponent},
  // {path: "products/:id", component: ProductDetailsComponent},
  // {path: "profile/:id", component: UserProfileComponent},
  // {path: "login", component: "LoginComponent"}
  // {path: "signup", component: "RegistrationComponent"}
];

