import {Component, inject} from "@angular/core";
import {Router} from '@angular/router';

@Component({
  selector: "app-footer",
  standalone: false,
  template: `
    <footer class="bg-zinc-100 shadow-sm">

      <div class="flex md:flex-row flex-col items-center px-5 justify-between">

        <div class="md:pr-5 flex items-center">
          <a href="#" class="">
            <img src="assets/images/brand-logo-black.svg" class="h-16" alt="Tee Party Logo"/>
          </a>
        </div>

        <div class="flex md:flex-row items-center flex-col flex-wrap">
          <app-footer-item
            (itemClicked)="onItemClicked($event)"
            *ngFor="let item of footerItems"
            [name]="item"/>
        </div>

      </div>

    </footer>
  `,
  styles: []
})
export class FooterComponent {

  private readonly router: Router = inject(Router);

  footerItems: string[] = ["Privacy Policy", "Shipping & Returns", "Contact"];

  async onItemClicked(path: string) {
    try {
      const success = await this.router.navigate([path]);
      if (success) {
        console.log('success');
      } else {
        console.log('fail');
      }
    } catch (error) {
      console.error('error', error);
    }
  }

}
