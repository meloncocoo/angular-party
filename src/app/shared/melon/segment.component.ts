import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ml-segment',
  template: `<div class='ui segment {{class}}'>
    <p><ng-content></ng-content></p>
  </div>`
})
export class MelonSegmentComponent {
  @Input('class') class: string;
}
