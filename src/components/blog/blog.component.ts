import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-blog',
  standalone: true,
  template: `
    <div class="blog">
      <h2 class="blog-title">{{ title }}</h2>
      <p class="blog-detail">{{ detail }}</p>
    </div>
  `,
  styles: [`
    .blog {
      padding: 1rem;
    }

    .blog-title {
      width: fit-content;
      font-size: 24px;
      margin-bottom: 1rem;
      color: #333;
    }

    .blog-detail {
      line-height: 1.6;
      color: #555;
    }
  `],
})
export class BlogComponent {
  @Input() title: string = ''
  @Input() detail: string = ''
}
