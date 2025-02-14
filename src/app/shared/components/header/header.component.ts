import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MenuItem} from './menuItem.model';

@Component({
    selector: 'app-header',
    template: `
        <header class="fixed w-full text-zinc-200 scroll z-10">

            <nav class="sticky flex top-0 bg-gradient-to-r from-sky-900 via-pink-700 to-amber-600 z-10">

                <div class="flex items-center gap-2 pl-4 h-[62px]">
                    <img src="assets/images/brand-logo.svg" alt="brand logo" width="60" height="60">
                </div>

                <div class="md:flex hidden flex-1 items-center justify-end pr-5">
                    <app-header-item
                            *ngFor="let item of menuItems"
                            [menuItem]="item"
                            (itemClicked)="onItemClicked($event)"/>
                </div>

                <div class="block md:hidden ml-auto pr-4 my-auto">

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
                                *ngFor="let item of mobileMenuItems"
                                [menuItem]="item"/>

                    </div>
                </div>
            </nav>

        </header>
    `,
    standalone: false,
    styles: []
})
export class HeaderComponent implements OnInit {

  userLoggedIn = true;

  menuItems!: MenuItem[];
  mobileMenuItems!: MenuItem[];

  mobileMenuOpen = false;

  constructor(private router: Router) { }

  onClickMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  async onItemClicked(path: string) {
    {
      try {
        const success = await this.router.navigate([path]);
        if (success) {
          console.log('success');
        } else {
          console.log('fail');
        }
      } catch (error) {
        console.error('error', error);
      }
    }
  }

  ngOnInit(): void {
    if(this.userLoggedIn) {
      this.menuItems = [
        {
          name: "Home",
          path: "/",
          icon: undefined,
          subMenus: undefined
        },
        {
          name: "About us",
          path: "",
          icon: undefined,
          subMenus: undefined
        },
        {
          name: "Products",
          path: "products",
          icon: undefined,
          subMenus: undefined
        },
        {
          name: "Cart",
          path: "cart",
          icon: "shopping-cart",
          subMenus: [
            {
              name: "Cart Items",
              path: "",
              icon: undefined
            }
          ]
        },
        {
          name: "Profile",
          path: "profile",
          icon: "user",
          subMenus: [
            {
              name: "Profile",
              path: "profile",
              icon: undefined
            },
            {
              name: "Orders",
              path: "orders",
              icon: undefined
            },
            {
              name: "Logout",
              path: "logout",
              icon: undefined
            }
          ]
        }];
      this.mobileMenuItems = [
        {
          name: "Home",
          path: "",
          icon: undefined,
          subMenus: undefined
        },
        {
          name: "About us",
          path: "",
          icon: undefined,
          subMenus: undefined
        },
        {
          name: "Products",
          path: "products",
          icon: undefined,
          subMenus: undefined
        },
        {
          name: "Cart",
          path: "cart",
          icon: "shopping-cart",
          subMenus: [
            {
              name: "Cart Items",
              path: "",
              icon: undefined
            }
          ]
        },
        {
          name: "Profile",
          path: "profile",
          icon: "user",
          subMenus: [
            {
              name: "Profile",
              path: "profile",
              icon: undefined
            },
            {
              name: "Orders",
              path: "orders",
              icon: undefined
            },
            {
              name: "Logout",
              path: "logout",
              icon: undefined
            }
          ]
        }];
    } else {
      this.menuItems = [
        {
          name: "Home",
          path: "",
          icon: undefined,
          subMenus: undefined
        },
        {
          name: "About us",
          path: "",
          icon: undefined,
          subMenus: undefined
        },
        {
          name: "Products",
          path: "products",
          icon: undefined,
          subMenus: undefined
        },
        {
          name: "Login",
          path: "",
          icon: "log-in",
          subMenus: undefined
        }];
    }
    this.mobileMenuItems = this.mobileMenuItems = [
      {
        name: "Home",
        path: "",
        icon: undefined,
        subMenus: undefined
      },
      {
        name: "About us",
        path: "",
        icon: undefined,
        subMenus: undefined
      },
      {
        name: "Products",
        path: "products",
        icon: undefined,
        subMenus: undefined
      },
      {
        name: "Login",
        path: "",
        icon: undefined,
        subMenus: undefined
      }];
  }

}
