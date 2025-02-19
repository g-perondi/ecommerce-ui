import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FooterComponent } from "./components/footer/footer.component";
import { FooterItemComponent } from "./components/footer/footer-item/footer-item.component";
import { HeaderComponent } from "./components/header/header.component";
import { HeaderItemComponent } from './components/header/header-item/header-item.component';
import { IconsModule } from '../../../icons.module';
import { FeatherModule } from 'angular-feather';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterOutlet } from '@angular/router';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FilterBarComponent } from './components/filters/filter-bar/filter-bar.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    FooterComponent,
    FooterItemComponent,
    HeaderComponent,
    HeaderItemComponent,
    LayoutComponent,
    PaginationComponent,
    FilterBarComponent
  ],
  exports: [
    LayoutComponent,
    FilterBarComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    FeatherModule,
    IconsModule,
    RouterOutlet,
    FormsModule
  ]
})
export class SharedModule {
}
