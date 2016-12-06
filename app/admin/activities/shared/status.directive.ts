import { Directive, ElementRef, Renderer, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[activityStatus]'
})
export class StatusDirective implements OnChanges {
  @Input('activityStatus') status: number;

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  ngOnChanges() {
    let text = '', className = 'label-default';
    switch (this.status) {
      case 0:
        text = '未发布';
        className = 'label-warning';
        break;
      case 1:
        text = '已发布';
        className = 'label-success';
        break;
    }
    this.renderer.setElementClass(this.el.nativeElement, className, true);
    this.renderer.createText(this.el.nativeElement, text);
  }
}
