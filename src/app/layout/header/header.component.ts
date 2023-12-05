import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { debounceTime, distinctUntilChanged, expand } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  url = 'https://github.com/antony-93/my-portfolio';

  classLink: string = 'nav-link d-flex d-md-block d-lg-flex text-white'
  classLinkIcon: string = 'material-icons-outlined mr-2 mr-md-0 mr-lg-1 mt-md-0 mt-1 align-center-md'

  expand: boolean = false
  isSticky: boolean = false
  
  constructor() {}

  ngOnInit() {}

  //#region === FUNCÕES DE CONTROLE DE TELA ===

  doRedirectGitHub(url: string): void {
    window.open(url, '_blank');
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
