import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
      <app-navbar></app-navbar>
      <app-events-list></app-events-list>
  `,
})
export class AppComponent {
  title = 'events';
}
