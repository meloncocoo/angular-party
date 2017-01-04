import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ml-loader',
  template: `
    <div *ngIf='!completed' class="ui spinner {{class}}">
      <div class="ui loader">
        <i class='fa fa-spinner fa-pulse fa-fw'></i>
        {{text}}
      </div>
    </div>
  `
})
export class MelonLoaderComponent {
  @Input('class') class: string;
  @Input('text') text: string;
  @Input('completed') completed: boolean = false;
}
