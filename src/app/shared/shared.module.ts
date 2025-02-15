import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {FooterComponent} from "./components/footer/footer.component";
import {FooterItemComponent} from "./components/footer/footer-item/footer-item.component";
import {HeaderComponent} from "./components/header/header.component";
import {HeaderItemComponent} from './components/header/header-item/header-item.component';
import {IconsModule} from '../../../icons.module';
import {FeatherModule} from 'angular-feather';
import {LayoutComponent} from './components/layout/layout.component';
import {RouterOutlet} from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    FooterItemComponent,
    HeaderComponent,
    HeaderItemComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    FeatherModule,
    IconsModule,
    RouterOutlet
  ],
  exports: [
    FooterComponent,
    FooterItemComponent,
    HeaderComponent,
    HeaderItemComponent,
    LayoutComponent,
  ]
})
export class SharedModule {
}
