import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';
import { FooterItemComponent } from './components/footer/footer-item/footer-item.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderItemComponent } from './components/header/header-item/header-item.component';
import { MobileHeaderItemComponent } from './components/header/mobile-header-item/mobile-header-item.component';
import {IconsModule} from '../../../icons.module';
import {FeatherModule} from 'angular-feather';

@NgModule({
  declarations: [
    FooterComponent,
    FooterItemComponent,
    HeaderComponent,
    HeaderItemComponent,
    MobileHeaderItemComponent
  ],
  imports: [
    CommonModule,
    FeatherModule,
    IconsModule,
  ],
  exports: [
    FooterComponent,
    FooterItemComponent,
    HeaderComponent,
    HeaderItemComponent,
    MobileHeaderItemComponent
  ]
})
export class SharedModule { }
