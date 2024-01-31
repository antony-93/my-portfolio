import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //#region === FUNCOES DE CONTROLE DE TELA ===
  
  doRedirectLink(link: string) {
    if (link) {
      window.open(link, '_blank');
    }
  }

  //#endregion
}
