import { Component } from '@angular/core'
import { HeaderComponent } from './header.component'
import { BlogComponent } from './blog.component'

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, BlogComponent],
  template: `
    <app-header></app-header>
    <div class="content">
      <app-blog title="Morning" detail="Morning My Friends"></app-blog>
    </div>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }
  `,
})
export class MainComponent {}
