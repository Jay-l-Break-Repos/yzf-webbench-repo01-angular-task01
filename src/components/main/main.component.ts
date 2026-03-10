import { Component } from '@angular/core'
import { BlogComponent } from '../blog/blog.component'

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [BlogComponent],
  template: `
    <main class="main">
      <app-blog
        [title]="blog.title"
        [detail]="blog.detail"
      />
    </main>
  `,
  styles: `
    .main {
      flex: 1;
      padding: 1rem;
      display: flex;
      flex-direction: row;
      gap: 2rem;
    }
  `,
})
export class MainComponent {
  blog = { title: 'Morning', detail: 'Morning My Friends' }
}
