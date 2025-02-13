import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer-item',
  imports: [],
  template: `
    <p (click)="onItemClicked(name)" class="cursor-pointer hover:underline py-1 px-8">{{ name }}</p>
  `,
  styles: []
})
export class FooterItemComponent {

  @Input({required: true}) name!: string;
  @Output() itemClicked = new EventEmitter();

  onItemClicked(name: string) {
    this.itemClicked.emit(name);
  }

}
