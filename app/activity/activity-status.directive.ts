import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[activity-status]'
})
export class ActivityStatusDirective {
  @Input('activity-status') status: string;

  constructor(el: ElementRef, renderer: Renderer) {
    // renderer.setElementClass(el.nativeElement, 'label', false);

    let className = 'label-default';

    if (this.status === '已发布') {
      className = 'label-success';
    } else if (this.status === '未发布') {
      className = 'label-warning';
    }

    renderer.setElementClass(el.nativeElement, className, true);
  }
}
