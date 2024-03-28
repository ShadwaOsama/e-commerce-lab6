import { Directive,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appProductCard]',
  standalone: true
})
export class ProductCardDirective {
  @Input() bgColor: string = 'green';
  constructor(private ele: ElementRef) {
    ele.nativeElement.style.boxShadow = '0px 0px 5px rgba(0, 0, 0, 0.2)';
  }
   @HostListener('mouseenter') onMouseEnter() {
    this.ele.nativeElement.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.ele.nativeElement.style.boxShadow = '0px 0px 5px rgba(0, 0, 0, 0.2)';
  }
  ngOnInit() {
    this.ele.nativeElement.style.borderRadius = '10px';
    this.ele.nativeElement.style.padding = '20px';
    this.ele.nativeElement.style.margin = '10px';
    if (this.bgColor) {
      this.ele.nativeElement.style.backgroundColor = this.bgColor;
    }
  }

}
