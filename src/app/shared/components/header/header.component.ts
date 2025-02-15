import {Component, inject, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {HeaderItem} from "./header-item/HeaderItem.model";

@Component({
  selector: "app-header",
  standalone: false,
  template: `
    <header class="fixed w-full text-zinc-200 scroll z-10">

      <nav class="sticky flex top-0 bg-gradient-to-r from-sky-900 via-pink-700 to-amber-600 z-10 h-[62px]">

        <div class="flex items-center gap-2 pl-4">
          <img src="assets/images/brand-logo.svg" alt="brand logo" width="60" height="60">
        </div>

        <div class="md:flex hidden flex-1 items-center justify-end pr-5">
          <app-header-item
            *ngFor="let item of headerItems"
            [headerItem]="item"
            (itemClicked)="onItemClicked($event)"/>
        </div>

        <div class="block md:hidden ml-auto pr-4 my-auto">

          <button (click)="onToggleMobileMenu()">
            <div
              [ngClass]="{'top-2 rotate-45': mobileMenuOpen, 'top-0': !mobileHeaderItems}"
              class="relative transition-all bg-zinc-200 rounded-full h-1 w-8 mt-1"></div>
            <div
              [ngClass]="{'opacity-0': mobileMenuOpen}"
              class="transition-all bg-zinc-200 rounded-full h-1 w-8 mt-1"></div>
            <div
              [ngClass]="{'-top-2 -rotate-45': mobileMenuOpen, 'top-0': !mobileHeaderItems}"
              class="relative group-open:-top-2 group-open:-rotate-45 transition-all bg-zinc-200 rounded-full h-1 w-8 mt-1"></div>
          </button>

          <div
            *ngIf="mobileMenuOpen"
            class="z-10 absolute top-[60px] bg-gradient-to-r from-sky-900 via-pink-700 to-amber-600 w-full left-0">

            <app-header-item
              (itemClicked)="onItemClicked($event)"
              *ngFor="let item of mobileHeaderItems"
              [headerItem]="item"/>

          </div>
        </div>
      </nav>

    </header>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  private readonly router: Router = inject(Router);

  userLoggedIn = false;

  headerItems!: HeaderItem[];
  mobileHeaderItems!: HeaderItem[];

  mobileMenuOpen = false;

  onToggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  async onItemClicked(path: string) {
    try {
      const success = await this.router.navigate([path]);
      this.mobileMenuOpen = !this.mobileMenuOpen;
      if (success) {
        console.log('success');
      } else {
        console.log('fail');
      }
    } catch (error) {
      console.error('error', error);
    }
  }

  ngOnInit(): void {
    if (this.userLoggedIn) {
      this.headerItems = [
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
      this.mobileHeaderItems = [
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
          subMenus: undefined
        },
        {
          name: "Profile",
          path: "profile",
          icon: "user",
          subMenus: undefined
        }];
    } else {
      this.headerItems = [
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
    this.mobileHeaderItems = this.mobileHeaderItems = [
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
