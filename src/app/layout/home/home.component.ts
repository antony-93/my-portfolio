import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  private sentences: any[] = [
    'Full Stack Developer',
    'Designing the future',
    'Creative programming'
  ]

  ngAfterViewInit(): void {
    this.doInitTypingAnimation()
  }

  //#region === FUNÇÕES TYPE ANIMATION ===

  doInitTypingAnimation() {
    const typed = new Typed(".typing", {
      strings: this.sentences,
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    });
  }

  //#endregion

}
