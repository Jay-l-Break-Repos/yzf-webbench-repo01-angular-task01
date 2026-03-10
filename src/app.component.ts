import { Component } from '@angular/core'
import { HeaderComponent } from './components/header/header.component'
import { MainComponent } from './components/main/main.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainComponent],
  template: `
    <app-header></app-header>
    <app-main></app-main>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  `],
})
export class AppComponent {
  title = 'angular'
}
