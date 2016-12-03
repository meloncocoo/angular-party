import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'admin',
  template: `
    <header [subtitle]="subtitle"></header>
    <div style="margin-top: 70px;">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AdminComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}