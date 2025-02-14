import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {HomeComponent} from "./home.component";
import {NewsletterFormComponent} from "./newsletter-form/newsletter-form.component";
import {SharedModule} from "../shared/shared.module";
import {HomeRoutingModule} from "./home-routing.module";


@NgModule({
  declarations: [
    HomeComponent,
    NewsletterFormComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class HomeModule {
}
