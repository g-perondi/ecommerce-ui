import { Component } from '@angular/core';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { NewsletterFormComponent } from '../components/newsletter-form/newsletter-form.component';

@Component({
  selector: 'app-home',
  imports: [
    FooterComponent,
    HeaderComponent,
    NewsletterFormComponent
  ],
  template: `
    <div style="background-image: url('/bg-image.jpg')" class="bg-cover bg-fixed min-w-[375px]" >
      <app-header />
        <div class="flex items-center justify-center h-[calc(100vh-160px)] md:h-[calc(100vh-64px)] pt[60px] " >
          <app-newsletter-form />
        </div>
      <app-footer class="w-full opacity-90" />
    </div>
  `,
  styles: []
})
export class HomeComponent {


}
