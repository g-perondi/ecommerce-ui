import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MenuItem} from '../menuItem.model';

@Component({
    selector: 'app-mobile-header-item',
    template: `
        <div
                (click)="onClickMenuItem(menuItem.path)"
                class="relative flex h-full cursor-pointer items-center justify-center p-4 text-zinc-200 hover:text-zinc-200 transition-colors hover:bg-white/10">
            <span>{{ menuItem.name }}</span>
        </div>
    `,
    standalone: false,
    styles: []
})
export class MobileHeaderItemComponent {

  @Input({required: true}) menuItem!: MenuItem;
  @Output() itemClicked = new EventEmitter<string>();

  onClickMenuItem(path: string) {
    this.itemClicked.emit(path);
  }

}
