import {Component} from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
    <footer class="md:rounded-t-md bg-zinc-100 shadow-sm">

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
  standalone: false,
  styles: []
})
export class FooterComponent {

  footerItems: string[] = ["Privacy Policy", "Shipping & Returns", "Contact"];

  onItemClicked(title: string) {
    console.log(title);
  }

}
