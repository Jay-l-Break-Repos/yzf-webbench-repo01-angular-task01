import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  template: `
    <div class="blog">
      <h2 class="blog-title">{{ title }}</h2>
      <p>{{ detail }}</p>
    </div>
  `,
  styles: `
    .blog-title {
      width: fit-content;
      font-size: 24px;
      margin-bottom: 1rem;
    }
  `,
})
export class BlogComponent {
  @Input() title: string = ''
  @Input() detail: string = ''
}
