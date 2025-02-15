import {Component} from "@angular/core";

@Component({
  selector: "app-home",
  standalone: false,
  template: `
    <div
      class="bg-cover bg-fixed items-center justify-center flex min-h-[calc(100vh-62px-160px)] md:min-h-[calc(100vh-126px)]"
      style="background-image: url('assets/images/bg-image.jpg')"
    >
      <app-newsletter-form/>
    </div>
  `,
  styles: []
})
export class HomeComponent {

}
