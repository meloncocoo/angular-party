import { Component, Input, OnInit } from '@angular/core';

export class Alert {
  public dismissible: boolean = false;

  constructor(
    public type?: string,
    public content?: string
  ) { }

  clear(): void {
    this.content = '';
  }

  set(type: string, content: string, dismissible = false): void {
    this.type = type;
    this.content = content;
    this.dismissible = dismissible;
  }
}

@Component({
  moduleId: module.id,
  selector: 'app-alert',
  template: `
    <div *ngIf="alert && alert.content" [ngClass]="setClasses()">
      <i *ngIf="alert && alert.type === 'loading'" class="fa fa-spinner fa-pulse fa-fw"></i>
      {{alert.content}}
      <button *ngIf="alert.dismissible" type="button" class="close" data-dismiss="alert">
        <span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
      </button>
    </div>`
})
export class AlertComponent implements OnInit {
  @Input() alert: Alert;

  constructor() { }

  ngOnInit() { }

  setClasses() {
    let classes = {
      'alert': true,
      'alert-info': this.alert.type === 'info',
      'alert-success': this.alert.type === 'success',
      'alert-danger': this.alert.type === 'danger',
      'alert-warning': this.alert.type === 'warning',
      'alert-dismissible': this.alert.dismissible
    };
    return classes;
  }
}
