import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: "app-pagination",
  standalone: false,
  template: `
    <div class="my-10 w-full flex items-center justify-center">

      <nav>
        <ul class="flex items-center -space-x-px h-10 text-base">

          <li>
            <button
              (click)="previousPage()"
              [ngClass]="{'disabled, opacity-30': currentPage === 1}"
              class="flex items-center justify-center px-4 h-10 cursor-pointer ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-amber-500/80">
              <svg class="w-3 h-3 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M5 1 1 5l4 4"/>
              </svg>
            </button>
          </li>

          <li *ngFor="let page of [].constructor(totalPages); let i = index">
            <button
              [ngClass]="{'bg-amber-500 text-white disabled scale-110': currentPage === (i + 1), 'bg-white cursor-pointer hover:bg-amber-500/80 hover:text-white': currentPage !== (i + 1)}"
              (click)="onSelectPage(i+1)"
               class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 ">
              {{ i+1 }}
            </button>
          </li>

          <li>
            <button
              (click)="nextPage()"
              [ngClass]="{'disabled, opacity-30': currentPage === totalPages}"
               class="flex items-center justify-center px-4 h-10 cursor-pointer leading-tight bg-white border border-gray-300 rounded-e-lg hover:bg-amber-500/80 text-zinc-200">
              <svg class="w-3 h-3 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m1 9 4-4-4-4"/>
              </svg>
            </button>
          </li>

        </ul>
      </nav>

    </div>
  `,
  styles: []
})
export class PaginationComponent {

  currentPage: number = 1;

  @Input() totalPages: number = 5;
  @Output() pageChanged = new EventEmitter<number>();

  onSelectPage(page: number) {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      this.pageChanged.emit(this.currentPage);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.onSelectPage(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.onSelectPage(this.currentPage + 1);
    }
  }

}
