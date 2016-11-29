import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['/app.component.css'],
  template: `
    <header [subtitle]="subtitle"></header>
    <div style="margin-top: 70px;">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  subtitle = '(v1.0)';
}
