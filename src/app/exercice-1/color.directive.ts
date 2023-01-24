import { Directive, ElementRef, HostListener } from '@angular/core'

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  colorList = { ArrowUp: '#f00', ArrowDown: '#ea0', ArrowLeft: '#00f', ArrowRight: '#0ae' }

  constructor(private el: ElementRef) { }

  // keyCode or which are deprecated
  // so i use code as key in colorList
  @HostListener('window: keydown', ['$event'])
  changeColor(event: KeyboardEvent) {
    this.el.nativeElement.style.color = this.colorList[event.code]
  }

  // i choose to reset color on keyUp so color only change
  // when key is pressed down
  @HostListener('window: keyup')
  resetColor() {
    this.el.nativeElement.style.color = 'inherit'
  }
}
