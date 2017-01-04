import { Component, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ml-spinner',
  template: `<div class="ui page spinner" #spinner>
    <div class="content">
      <ng-content></ng-content>
    </div>
  </div>`
})
export class MelonSpinnerComponent {
  @ViewChild('spinner') spinner: ElementRef;

  show(options?: {}) {
    // jQuery(this.spinner.nativeElement)
    //   .spinner(options || {})
    //   .spinner('toggle');
  }
}
