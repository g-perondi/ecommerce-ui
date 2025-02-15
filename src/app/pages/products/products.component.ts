import {Component} from "@angular/core";

@Component({
  selector: "app-products",
  standalone: false,
  template: `

    <div class="flex flex-col items-center justify-center bg-zinc-200">
      <div class="fixed flex border-sky-900 border-2 items-center justify-center h-15 top-20 w-[86%] rounded-md backdrop-blur-lg bg-white">FILTRI RICERCA</div>
      <app-products-list class="mt-25" />
      <div class="my-10 w-full text-center">ELENCO PAGINE</div>
    </div>

  `,
  styles: []
})
export class ProductsComponent {


}
