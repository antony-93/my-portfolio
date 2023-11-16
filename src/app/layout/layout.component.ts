import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  sticky: boolean = false

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.doCheckScroll()
  }

  //#region === FUNCOES DE CONTROLE DE TELA ===

  doCheckScroll() {
    const container = this.el.nativeElement.querySelector('#page-overflow');

    container.addEventListener('scroll', () => {
      const st = container.scrollTop;

      if (st > 0) {
        this.sticky = true
      } else {
        this.sticky = false
      }
    });
  }

  //#endregion

}
