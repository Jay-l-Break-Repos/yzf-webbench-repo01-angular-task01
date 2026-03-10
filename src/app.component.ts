import { Component } from '@angular/core'
import { MainComponent } from './main.component'

@Component({
  selector: 'app-root',
  imports: [MainComponent],
  template: `<app-main></app-main>`,
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
