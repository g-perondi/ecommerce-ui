import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  template: `
    <app-header />
    <app-footer />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce-project-ui';
}
