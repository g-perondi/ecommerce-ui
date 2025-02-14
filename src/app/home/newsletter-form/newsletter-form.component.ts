import { Component } from '@angular/core';

@Component({
  selector: 'app-newsletter-form',
  standalone: false,
  template: `
      <div class="flex my-auto flex-col items-center justify-center bg-white/40 py-2 px-4 rounded-xl text-center backdrop-blur-md">
          <div>
              <img src="/brand-logo.svg" alt="" width="200">
          </div>
          <div class="mt-3 text-sm ">
              Keep me updated with news and promotions
          </div>
          <form class="mt-2 p-2 flex gap-2" (ngSubmit)="onSubmit()">
              <input
                      class="rounded-sm w-55 bg-white/30 backdrop-blur-md p-2  text-zinc-900 placeholder-zinc-500 focus:outline outline-amber-500 caret-sky-900"
                      type="email"
                      name="email"
                      placeholder="Email"
                      [(ngModel)]="enteredEmail"
              >
              <button
                      type="submit"
                      class="cursor-pointer rounded-sm w-25 bg-gradient-to-r from-sky-900 via-pink-700 to-amber-600 text-zinc-200 py-2 transition-colors hover:opacity-80 hover:shadow-lg hover:shadow-black/20">
                  Subscribe
              </button>
          </form>
      </div>
  `,
  styles: []
})
export class NewsletterFormComponent {
  enteredEmail = "";

  onSubmit() {
    console.log(this.enteredEmail);
  }
}
