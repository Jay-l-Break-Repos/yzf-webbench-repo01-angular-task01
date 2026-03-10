import { Component } from '@angular/core'
import { HeaderComponent } from './app/header/header.component'
import { MainComponent } from './app/main/main.component'

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainComponent],
  template: `
    <app-header></app-header>
    <app-main></app-main>
  `,
  styles: `
    body {
      margin: 0;
      padding: 0;
    }
  `,
})
export class AppComponent {
  title = 'angular'
}
