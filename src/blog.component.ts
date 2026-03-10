import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  template: `
    <article class="blog">
      <div class="blog-title">{{ title }}</div>
      <div class="blog-detail">{{ detail }}</div>
    </article>
  `,
  styles: `
    .blog {
      padding: 1rem 2rem;
    }

    .blog-title {
      width: fit-content;
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .blog-detail {
      line-height: 1.6;
      color: #333;
    }
  `,
})
export class BlogComponent {
  @Input() title: string = ''
  @Input() detail: string = ''
}
