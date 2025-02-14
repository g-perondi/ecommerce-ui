import {Component} from "@angular/core";

@Component({
  selector: "app-home",
  standalone: false,
  template: `
    <app-header/>
    <div style="background-image: url('assets/images/bg-image.jpg')" class="bg-cover bg-fixed min-w-[375px]">
      <div class="flex items-center justify-center h-[calc(100vh-160px)] md:h-[calc(100vh-64px)] pt[60px] ">
        <app-newsletter-form/>
      </div>
      <app-footer class="w-full opacity-90"/>
    </div>
  `,
  styles: []
})
export class HomeComponent {

}
