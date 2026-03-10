import { Component } from '@angular/core'

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  template: `
    <article class="blog">
      <p>Blog Component</p>
    </article>
  `,
  styles: `
    .blog {
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-bottom: 1rem;
    }
  `,
})
export class BlogComponent {}
