import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core';

@Directive({ selector: '[radius]' })
export class RadiusDirective implements OnInit {
  @Input('bg-class') bgClass: string = 'bg-primary';
  @Input('content') content: string = '0';
  private spanEl: ElementRef;

  constructor(private renderer: Renderer, private el: ElementRef) {
    this.spanEl = this.renderer.createElement(this.el.nativeElement, 'span');
  }

  ngOnInit() {
    this.renderer.createText(this.spanEl, this.content);
    this.renderer.setElementStyle(this.spanEl, 'height', '30px');
    this.renderer.setElementStyle(this.spanEl, 'line-height', '30px');
    this.renderer.setElementStyle(this.spanEl, 'display', 'block');
    this.renderer.setElementStyle(this.spanEl, 'text-align', 'center');

    this.renderer.setElementStyle(this.el.nativeElement, 'width', '30px');
    this.renderer.setElementStyle(this.el.nativeElement, 'height', '30px');
    this.renderer.setElementStyle(this.el.nativeElement, 'borderRadius', '15px');
    this.renderer.setElementClass(this.el.nativeElement, this.bgClass, true);
  }
}
