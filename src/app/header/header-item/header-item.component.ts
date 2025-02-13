import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-header-item',
  imports: [
    FeatherModule,
    NgIf,
    NgForOf
  ],
  template: `
    <div
      (click)="onClickMenuItem(title)"
      class="relative flex h-full items-center justify-center rounded-sm p-4 cursor-pointer text-zinc-200 hover:bg-white/10 transition-colors ease-in-out group">

      <a *ngIf="!icon" href="#">{{ title }}</a>
      <a *ngIf="icon" class="h-[30px]" href="#"><i-feather [name]="icon"></i-feather></a>

      <div *ngIf="subMenus" class="absolute bg-amber-600 top-full right-0 whitespace-nowrap rounded-b-md">

        <div
          *ngFor="let title of subMenus"
          (click)="onClickDropdownItem(title, $event)"
          class="hidden p-4 text-center text-zinc-200 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out cursor-pointer group-hover:block">
          <span>{{ title }}</span>
        </div>

      </div>

    </div>
  `,
  styles: []
})
export class HeaderItemComponent {

  @Input({required: true}) title!: string;
  @Input() icon?: string;
  @Input() subMenus?: string[];
  @Output() itemClicked = new EventEmitter<string>();

  onClickMenuItem(title: string) {
    this.itemClicked.emit(title);
  }

  onClickDropdownItem(title: string, event: Event) {
    event.stopPropagation();
    this.itemClicked.emit(title);
  }
}
