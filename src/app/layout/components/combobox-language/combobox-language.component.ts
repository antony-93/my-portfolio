import { Component, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-combobox-language',
  templateUrl: './combobox-language.component.html',
  styleUrls: ['./combobox-language.component.css']
})
export class ComboboxLanguageComponent {

  flagClass: string = 'br'

  @Input() responsive: boolean = false

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.doCheckLanguageStorage()
    this.doListenerLanguageStorage()
  }

  //#region === FUNCOES DO TRANSLATE ===

  doSetLanguage(code: string) {
    this.doSetLanguageInStorage(code)
    this.doSetFlagClassByCode(code)
    this.doSetTranslation(code)
  }

  doSetTranslation(language: string | null) {
    if (language && language != '') this.translate.use(language)
  }

  //#endregion

  //#region === FUNCOES DO LOCALSTORAGE ===

  doCheckLanguageStorage() {
    let language = localStorage.getItem('language')

    if (!language || language == '') language = 'pt-BR'

    this.doSetFlagClassByCode(language)
    this.doSetTranslation(language)
  }

  doListenerLanguageStorage() {
    window.addEventListener('storage', this.onLanguageStorageChange.bind(this));
  }

  onLanguageStorageChange(event: StorageEvent) {
    if (event.key == 'language') {
      this.doSetFlagClassByCode(event.newValue)
      this.doSetTranslation(event.newValue)
    }
  }

  doSetLanguageInStorage(code: string) {
    localStorage.setItem('language', code)
  }

  //#endregion

  //#region === FUNCOES DE CONTROLE DE TELA ===

  doSetFlagClassByCode(code: string | null) {
    let className: string = ''

    if (code == 'pt-BR') className = 'br'
    if (code == 'en') className = 'us'
    if (code == 'es') className = 'es'
    if (code == 'it') className = 'it'

    if (className && className != '') this.flagClass = className
  }

  //#endregion

}
