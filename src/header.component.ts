import { Component } from '@angular/core'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="header">
      <h1>Hello Blog</h1>
    </header>
  `,
  styles: `
    .header {
      background-color: #4a90d9;
      color: #ffffff;
      padding: 1rem 2rem;
      text-align: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .header h1 {
      margin: 0;
      font-size: 1.8rem;
      font-weight: 600;
      letter-spacing: 0.5px;
    }
  `,
})
export class HeaderComponent {}
