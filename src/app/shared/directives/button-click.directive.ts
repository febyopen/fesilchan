import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonClick]'
})
export class ButtonClickDirective {

  constructor(private _ren: Renderer2, private _el: ElementRef) { }

  @HostListener('click') onClick() {
    this._ren.addClass(this._el.nativeElement, 'animate');
    console.log('click')
    setTimeout(() => {
      this._ren.removeClass(this._el.nativeElement, 'animate');
    }, 1000)
  }

}