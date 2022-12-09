import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input} from '@angular/core';
import { DefaultExport } from '@angular/router';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective implements OnInit{
@Input() defaultColor: string= 'transparent';
@Input() highlightColor: string='blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green', false, false);
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightgreen');
    this.backgroundColor=this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor=this.defaultColor;
  }

}
