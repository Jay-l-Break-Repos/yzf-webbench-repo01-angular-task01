import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  template: `
    <article class="blog">
      <h2 class="blog-title">{{ title }}</h2>
      <p class="blog-detail">{{ detail }}</p>
    </article>
  `,
  styles: `
    .blog {
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-bottom: 1rem;
    }
    .blog-title {
      width: fit-content;
      font-size: 24px;
      margin: 0 0 0.5rem 0;
    }
    .blog-detail {
      margin: 0;
      color: #555;
    }
  `,
})
export class BlogComponent {
  @Input() title: string = '';
  @Input() detail: string = '';
}
