import { Component } from '@angular/core';
import { FooterItemComponent } from './footer-item/footer-item.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
    FooterItemComponent,
    NgForOf
  ],
  template: `
    <footer class="bg-zinc-50 rounded-lg shadow-sm dark:bg-zinc-900 m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="#" class="flex items-center mb-4 sm:mb-0 gap-2">
            <img src="/brand-logo-black.svg" class="h-16" alt="Tee Party Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-zinc-200">Tee Party</span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-zinc-500 sm:mb-0 dark:text-zinc-400">
            <app-footer-item
              (itemClicked)="onItemClicked($event)"
              *ngFor="let item of footerItems"
              [name]="item" />
          </ul>
        </div>
        <hr class="my-6 border-zinc-200 sm:mx-auto dark:border-zinc-700 lg:my-8" />
        <span class="block text-sm text-zinc-500 sm:text-center dark:text-zinc-400">© 2025 <a href="#" class="hover:underline">Tee Party</a>™. All Rights Reserved.</span>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {


  footerItems: string[] = ["About", "Privacy Policy", "Shipping & Returns", "Contact"];

  onItemClicked(title: string) {
    console.log(title);
  }

}
