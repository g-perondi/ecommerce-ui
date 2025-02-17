import { Component } from "@angular/core";

@Component({
  selector: "app-layout",
  standalone: false,
  template: `
    <app-header/>

    <main class="mt-[62px] full-screen">
      <router-outlet/>
    </main>

    <app-footer/>
  `,
  styles: [":host {display: flex; flex-direction: column; min-height: 100vh;}"]
})
export class LayoutComponent {


}
