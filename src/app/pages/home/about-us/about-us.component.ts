import {Component} from "@angular/core";

@Component({
  selector: "app-about-us",
  standalone: false,
  template: `
    <div class="max-w-2/3 mx-auto px-8 py-12 mt-20 mb-10 bg-white shadow-lg rounded-lg">
      <h1 class="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h1>

      <section class="text-gray-700 leading-relaxed mb-12">
        <p class="text-lg text-center">
          At <strong>Tee Party</strong>, we believe a t-shirt is more than just fabric - it's a statement, a piece of art, and a form of self-expression. Our mission is to bring high-quality, stylish, and unique tees to people who love to stand out.
        </p>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
        <p class="text-gray-600">
          Founded in 2015 by a group of design enthusiasts, Tee Party started as a small passion project. Frustrated with the lack of unique, high-quality tees, we decided to create our own. What began in a basement with a handful of designs has grown into a global brand with a loyal community of t-shirt lovers.
        </p>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">What Makes Us Different?</h2>
        <ul class="list-disc pl-5 space-y-2 text-gray-600">
          <li><strong>Unique Designs:</strong> Exclusive, artist-driven graphics for every style.</li>
          <li><strong>Premium Quality:</strong> Super-soft, durable, and breathable fabrics.</li>
          <li><strong>Sustainability:</strong> Eco-friendly materials and ethical production.</li>
          <li><strong>Community-Focused:</strong> We engage with our customers through contests and collaborations.</li>
        </ul>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Our Mission & Values</h2>
        <p class="text-gray-600">
          Our goal is to create more than just clothing—we want to inspire confidence and creativity. Every t-shirt we make reflects our commitment to innovation, sustainability, inclusivity, and fun.
        </p>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">How We Create Our Tees</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-4 border border-gray-300 rounded-lg">
            <h3 class="font-semibold text-gray-700">1. Idea & Inspiration</h3>
            <p class="text-gray-600">We brainstorm fresh designs based on pop culture, art, and fashion trends.</p>
          </div>
          <div class="p-4 border border-gray-300 rounded-lg">
            <h3 class="font-semibold text-gray-700">2. Digital Mockups</h3>
            <p class="text-gray-600">Our artists create digital previews to ensure a perfect fit for our tees.</p>
          </div>
          <div class="p-4 border border-gray-300 rounded-lg">
            <h3 class="font-semibold text-gray-700">3. Sustainable Printing</h3>
            <p class="text-gray-600">We use eco-friendly inks and ethical printing techniques.</p>
          </div>
          <div class="p-4 border border-gray-300 rounded-lg">
            <h3 class="font-semibold text-gray-700">4. Quality Control</h3>
            <p class="text-gray-600">Every product is inspected before it reaches your hands.</p>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Looking Ahead</h2>
        <p class="text-gray-600">
          We are constantly innovating—expanding into new styles, launching eco-friendly collections, and introducing an AR try-on experience. The future of Tee Party is bright, and we want you to be a part of it!
        </p>
      </section>

      <section class="text-center">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Thank You for Being Part of Our Story!</h2>
        <p class="text-gray-600">Your support means the world to us. Keep rocking your favorite tees and spreading the love!</p>
      </section>
    </div>

  `,
  styles: []
})
export class AboutUsComponent {
}
