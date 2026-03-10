import { Component } from '@angular/core'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="header">
      <span>Hello Blog</span>
    </header>
  `,
  styles: `
    .header {
      background-color: #4CAF50;
      color: white;
      padding: 1rem;
      text-align: center;
      font-size: 1.5rem;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `,
})
export class HeaderComponent {}
