import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MenuItem} from '../menuItem.model';

@Component({
    selector: 'app-header-item',
    template: `
        <div
                (click)="onClickMenuItem(menuItem.path)"
                class="relative flex h-full items-center justify-center rounded-sm p-4 cursor-pointer text-zinc-200 hover:bg-white/10 transition-colors ease-in-out group">

            <p *ngIf="!menuItem.icon">{{ menuItem.name }}</p>
            <p *ngIf="menuItem.icon" class="h-[30px]">
                <i-feather [name]="menuItem.icon"></i-feather>
            </p>

            <div *ngIf="menuItem.subMenus" class="absolute bg-amber-600 top-full w-40 right-0 whitespace-nowrap rounded-b-md">

                <div
                        *ngFor="let subMenu of menuItem.subMenus"
                        (click)="onClickDropdownItem(subMenu.path, $event)"
                        class="hidden p-4 text-center text-zinc-200 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out cursor-pointer group-hover:block">
                    <span>{{ subMenu.name }}</span>
                </div>

            </div>

        </div>
    `,
    standalone: false,
    styles: []
})
export class HeaderItemComponent {

  @Input({required: true}) menuItem!: MenuItem;

  @Output() itemClicked = new EventEmitter<string>();

  onClickMenuItem(name: string) {
    this.itemClicked.emit(name);
  }

  onClickDropdownItem(name: string, event: Event) {
    event.stopPropagation();
    this.itemClicked.emit(name);
  }
}
