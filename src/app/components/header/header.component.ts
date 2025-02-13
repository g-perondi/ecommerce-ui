import { Component } from '@angular/core';
import { IconsModule } from '../../../../icons.module';
import { NgClass, NgForOf, NgIf, NgOptimizedImage } from '@angular/common';
import { HeaderItemComponent } from './header-item/header-item.component';
import { MobileHeaderItemComponent } from './mobile-header-item/mobile-header-item.component';

@Component({
  selector: 'app-header',
  imports: [
    IconsModule,
    NgClass,
    HeaderItemComponent,
    NgOptimizedImage,
    NgForOf,
    NgIf,
    MobileHeaderItemComponent
  ],
  template: `
    <header class="fixed w-full text-zinc-200 scroll z-10">

      <nav class="sticky flex top-0 bg-gradient-to-r from-sky-900 via-pink-700 to-amber-600 z-10">

        <div class="flex items-center gap-2 pl-4 h-[62px]">
          <img ngSrc="/brand-logo.svg" alt="brand logo" width="60" height="60" priority>
        </div>

        <div class="md:flex hidden flex-1 items-center justify-end pr-5">
          <app-header-item
            (itemClicked)="onItemClicked($event)"
            *ngFor="let item of menuItems"
            [title]="item.title"
            [icon]="item.icon"
            [subMenus]="item.submenus" />
        </div>

        <div class="block md:hidden ml-auto pr-4 my-auto" >

          <button (click)="onClickMobileMenu()">
            <div
              [ngClass]="{'top-2 rotate-45': mobileMenuOpen, 'top-0': !mobileMenuItems}"
              class="relative transition-all bg-zinc-200 rounded-full h-1 w-8 mt-1"></div>
            <div
              [ngClass]="{'opacity-0': mobileMenuOpen}"
              class="transition-all bg-zinc-200 rounded-full h-1 w-8 mt-1"></div>
            <div
              [ngClass]="{'-top-2 -rotate-45': mobileMenuOpen, 'top-0': !mobileMenuItems}"
              class="relative group-open:-top-2 group-open:-rotate-45 transition-all bg-zinc-200 rounded-full h-1 w-8 mt-1"></div>
          </button>

          <div
            *ngIf="mobileMenuOpen"
            class="z-20 absolute top-[60px] bg-gradient-to-r from-sky-900 via-pink-700 to-amber-600 w-full left-0">

            <app-mobile-header-item
              (itemClicked)="onItemClicked($event)"
              *ngFor="let title of mobileMenuItems"
              [title]="title" />

          </div>
        </div>
      </nav>

    </header>
  `,
  styles: []
})
export class HeaderComponent {

  menuItems: {"title": string, "icon": string | undefined, submenus: string[] | undefined}[] = [
    {
      title: "Home",
      icon: undefined,
      submenus: undefined
    },
    {
      title: "About us",
      icon: undefined,
      submenus: undefined
    },
    {
      title: "Products",
      icon: undefined,
      submenus: undefined
    },
    {
      title: "Cart",
      icon: "shopping-cart",
      submenus: ["Cart Items"]
    },
    {
      title: "Profile",
      icon: "user",
      submenus: ["Profile", "Orders", "Logout"]
    },
  ];
  mobileMenuItems: string[] = ["Home", "Products", "Cart", "Profile"];

  mobileMenuOpen = false;

  onClickMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  onItemClicked(title: string) {

  }

}
