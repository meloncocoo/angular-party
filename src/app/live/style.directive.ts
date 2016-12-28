import { Directive, ElementRef, Renderer, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: '[style]' })
export class LiveStyleDirective implements OnInit, OnDestroy {
  @Input('body-class') bodyClass: string[];

  constructor(private renderer: Renderer, private el: ElementRef) { }

  ngOnInit() {
    this.bodyClass.forEach(item => {
      this.renderer.setElementClass(document.body, item, true);
    });
  }

  ngOnDestroy() {
    this.bodyClass.forEach(item => {
      this.renderer.setElementClass(document.body, item, false);
    });
  }
}