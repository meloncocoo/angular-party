import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'client',
  template: `
    <div bodyStyle [body-class]="['app-client']">
      <router-outlet></router-outlet>
    </div>  
  `
})
export class ClientComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}