import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective implements OnInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green', false, false);
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'green');
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
  }

}
