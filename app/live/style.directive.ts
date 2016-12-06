import { Directive, ElementRef, Renderer, OnDestroy } from '@angular/core';

@Directive({
  selector: '[liveStyle]'
})
export class LiveStyleDirective implements OnDestroy {
  constructor(private el: ElementRef, private renderer: Renderer) {
    renderer.setElementClass(document.body, 'app-live', true);
  }

  ngOnDestroy() {
    this.renderer.setElementClass(document.body, 'app-live', false);
  }
}