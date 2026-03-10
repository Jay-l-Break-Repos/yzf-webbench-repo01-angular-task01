import { Component } from '@angular/core'

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  template: `
    <main class="main">
      <p>Main Component</p>
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
export class MainComponent {}
