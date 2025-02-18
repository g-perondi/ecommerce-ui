import {Component, EventEmitter, Input, Output} from "@angular/core";
import {type HeaderItem} from "./HeaderItem.model";

@Component({
  selector: "app-header-item",
  standalone: false,
  template: `
    <div
      (click)="onClickMenuItem(headerItem.path, $event)"
      class="relative flex h-full cursor-pointer items-center justify-center p-4 text-zinc-200 hover:text-zinc-200 transition-colors hover:bg-white/10 group"
    >
      <span *ngIf="!headerItem.icon">{{ headerItem.name }}</span>
      <span *ngIf="headerItem.icon" class="h-[30px]">
        <i-feather [name]="headerItem.icon"></i-feather>
      </span>

      <div *ngIf="headerItem.subMenus"
           class="absolute bg-amber-600 top-full w-40 right-0 whitespace-nowrap rounded-b-md">
        <div
          *ngFor="let subMenu of headerItem.subMenus"
          (click)="onClickMenuItem(subMenu.path, $event)"
          class="hidden p-4 text-center text-zinc-200 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out cursor-pointer group-hover:block"
        >
          <span>{{ subMenu.name }}</span>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class HeaderItemComponent {

  @Input({required: true}) headerItem!: HeaderItem;

  @Output() itemClicked = new EventEmitter<string>();

  onClickMenuItem(path: string, event: Event) {
    event.stopPropagation();
    this.itemClicked.emit(path);
  }

}
