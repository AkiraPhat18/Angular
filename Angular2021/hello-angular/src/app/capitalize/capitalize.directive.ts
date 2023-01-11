import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCapitalize]',
  host: {
        '(input)' : 'onInputChange($event)'
  }
})
export class CapitalizeDirective {

  constructor(private el: ElementRef, private render: Renderer2) { }

  nInputChange(event: any) {
      let result: string = event.target.value;

      this.el.nativeElement.value = result.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
    })
  }

}
