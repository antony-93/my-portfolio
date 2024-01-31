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
    { title: 'Home', icon: 'icon-home', link: '/home' },
    { title: 'About', icon: 'icon-people', link: '/about' },
    { title: 'Projects', icon: 'icon-analytics', link: '/Projects' },
    { title: 'Resume', icon: 'icon-feed', link: '/Resume' },
  ]

  mode: string = 'dark_mode'

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

  doAlternateMode(mode: string) {
    const root = document.documentElement;

    if (root) {
      if (mode == 'dark_mode') {
        this.mode = 'light_mode';
        root.classList.remove('dark_theme');
        root.classList.add('light_theme');
      } else {
        this.mode = 'dark_mode';
        root.classList.remove('light_theme');
        root.classList.add('dark_theme');
      }
    }
  }

  //#endregion

}
