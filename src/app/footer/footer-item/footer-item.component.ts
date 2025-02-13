import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer-item',
  imports: [],
  template: `
    <li>
      <p (click)="onItemClicked(name)" class="hover:underline me-4 md:me-6">{{ name }}</p>
    </li>
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
