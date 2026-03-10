import { Component } from '@angular/core'
import { BlogComponent } from '../blog/blog.component'

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [BlogComponent],
  template: `
    <main class="main">
      <app-blog [title]="blogTitle" [detail]="blogDetail"></app-blog>
    </main>
  `,
  styles: `
    .main {
      padding: 1rem;
      max-width: 800px;
      margin: 0 auto;
    }
  `,
})
export class MainComponent {
  blogTitle = 'Morning';
  blogDetail = 'Morning My Friends';
}
