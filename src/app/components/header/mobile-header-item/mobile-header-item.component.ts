import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-header-item',
  imports: [],
  template: `
    <div
      (click)="onClickMenuItem(title)"
      class="relative flex h-full cursor-pointer items-center justify-center p-4 text-zinc-200 hover:text-zinc-200 transition-colors hover:bg-white/10">
      <span>{{ title }}</span>
    </div>
  `,
  styles: []
})
export class MobileHeaderItemComponent {

  @Input({required: true}) title!: string;
  @Output() itemClicked = new EventEmitter<string>();

  onClickMenuItem(title: string) {
    this.itemClicked.emit(title);
  }

}
