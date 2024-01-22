import { Component, HostListener } from '@angular/core';
import { MenuNavigation } from './components-header/nav-item/menu-navigation.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  navigations: MenuNavigation[] = [
    { title: 'Home', icon: 'icon-home', link: '/home'},
    { title: 'About', icon: 'icon-people', link: '/about'},
    { title: 'Projects', icon: 'icon-analytics', link: '/Projects'},
    { title: 'Resume', icon: 'icon-feed', link: '/Resume'},
  ]

  expand: boolean = false
  isSticky: boolean = false
  
  codeFlagTab = new BehaviorSubject<string | null>(null)
  codeFlagTouch = new BehaviorSubject<string | null>(null)
  
  //#region === FUNCOES EVENTOS ===

  doNextCodeFlagTab(code: string) {
    this.codeFlagTab.next(code)
  }

  doNextCodeFlagTouch(code: string) {
    this.codeFlagTouch.next(code)
  }

  //#endregion

  //#region === FUNCÕES DE CONTROLE DE TELA ===

  doRedirectGitHub() {
    window.open('https://github.com/antony-93/my-portfolio', '_blank');
  }

  doExpandNavbarSm() {
    if (this.expand) {
      this.expand = false
    } else {
      this.expand = true
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.isSticky = window.scrollY > 0;
  }

  //#endregion
}
