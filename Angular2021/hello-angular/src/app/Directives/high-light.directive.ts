import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective {
  @Input() appHighlight = '';

  //   ElementRef cấp quyền truy cập trực tiếp vào phần tử DOM thông qua thuộc tính nativeElement của nó.
  // Thêm ElementRef trong constructor() để tham chiếu đến phần tử DOM , phần tử mà bạn áp dụng trong appHighLight.
  constructor(private el: ElementRef) {
    console.log('HighLightDirective');
  }
   @HostListener('mouseenter') onMouseEnter() {
    this.highlight('pink');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }


}
