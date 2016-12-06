import { Component } from '@angular/core';

import '../assets/css/styles.css';

@Component({
  selector: 'app',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  subtitle = '(v1.0)';
}
