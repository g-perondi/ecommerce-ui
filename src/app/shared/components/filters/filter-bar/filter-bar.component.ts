import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: "app-filter-bar",
  standalone: false,
  template: `
    <div class="flex flex-col w-full gap-1 items-center p-4 mt-10 rounded-md bg-white shadow-md">

      <form class="flex items-center justify-between gap-1 w-full" (ngSubmit)="onSubmit()">

        <div class="w-1/3 md:w-1/4 flex flex-col gap-1">

          <div class="relative">
            <div class="absolute inset-y-0 flex items-center ps-3.5 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
              </svg>
            </div>
            <input
              name="minPrice"
              [(ngModel)]="minPrice"
              type="number"
              class="p-2.5 w-full z-20 ps-10 text-sm text-gray-900 bg-gray-50 rounded-lg border-gray-50 border"
              placeholder="Min price"/>
          </div>

          <div class="relative">
            <div class="absolute inset-y-0 flex items-center ps-3.5 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
              </svg>
            </div>
            <input type="number"
                   name="maxPrice"
                   [(ngModel)]="maxPrice"
                   class="p-2.5 w-full z-20 ps-10 text-sm text-gray-900 bg-gray-50 rounded-lg border-gray-50 border"
                   placeholder="Max price"/>
          </div>

        </div>

        <div class="flex gap-5 flex-1 justify-end">
          <div class="relative w-2/3">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input type="search"
                   name="searchQuery"
                   [(ngModel)]="searchQuery"
                   class="w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                   placeholder="Search Product..."/>
          </div>
          <button type="submit"
                  class="text-white bg-gradient-to-r from-sky-900 via-pink-700 to-amber-600 hover:opacity-90 font-medium rounded-lg text-sm px-4 py-2.5">
            Search
          </button>
        </div>

      </form>

    </div>

    <div class="w-full flex justify-end pt-5">
      <div class="rounded-sm md:w-1/3 shadow:md">
        <select
          class="text-gray-900 bg-gray-50 rounded-lg border-gray-50  border text-sm focus:ring-blue-500 focus:border-blue-500 w-full p-2.5">
          <option selected>Sort by Name (ascending)</option>
          <option value="name-desc">Sort by Name (descending)</option>
          <option value="price-asc">Sort by Price (from low to high)</option>
          <option value="price-desc">Sort by Price (from high to low)</option>
        </select>
      </div>
    </div>
  `
  ,
  styles: [":host {width: 100%;}"]
})
export class FilterBarComponent {

  minPrice?: number;
  maxPrice?: number;
  searchQuery?: string;

  @Output() filtersSet = new EventEmitter<{minPrice?: number; maxPrice?: number; query?: string;}>();

  onSubmit() {

    if(!this.minPrice && !this.maxPrice && !this.searchQuery) {
      console.log("invalid filter");
      return;
    }

    this.filtersSet.emit({
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      query: this.searchQuery,
    });
    console.log({
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      query: this.searchQuery,
    });
  }
}
