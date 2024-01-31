import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Flag } from './flag/flag.model';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-combobox-language',
  templateUrl: './combobox-language.component.html',
  styleUrls: ['./combobox-language.component.css']
})
export class ComboboxLanguageComponent implements OnInit, OnDestroy {

  flags: Flag[] = [
    {flag: 'br', code: 'pt-BR', title: 'Brasil'},
    {flag: 'us', code: 'en', title: 'United States'},
    {flag: 'es', code: 'es', title: 'España'},
    {flag: 'it', code: 'it', title: 'Italia'}
  ]

  flagClassSelected: string = 'br'
  
  @Input() responsive: boolean = false

  @Input() languageCode$: BehaviorSubject<string | null> | undefined
  private languageCodeSub$: Subscription | undefined

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.doCheckLanguageStorage()
    this.doListenerLanguageStorage()
    this.doWaitLanguage()
  }

  ngOnDestroy() {
    this.doUnsubscribeLanguageSub()
  }

  //#region === FUNCOES DO TRANSLATE ===

  doSetLanguage(code: string) {
    this.doSetLanguageInStorage(code)
    this.doSetFlagClassSelectedByCode(code)
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

    this.doSetFlagClassSelectedByCode(language)
    this.doSetTranslation(language)
  }

  doListenerLanguageStorage() {
    window.addEventListener('storage', this.onLanguageStorageChange.bind(this));
  }

  onLanguageStorageChange(event: StorageEvent) {
    if (event.key == 'language') {
      this.doSetFlagClassSelectedByCode(event.newValue)
      this.doSetTranslation(event.newValue)
    }
  }

  doSetLanguageInStorage(code: string) {
    localStorage.setItem('language', code)
  }

  //#endregion

  //#region === FUNCOES EVENTOS ===

  doWaitLanguage() {
    if (!this.languageCode$) return;

    this.languageCodeSub$ = this.languageCode$.subscribe(res => {
      if (res) {
        this.doSetFlagClassSelectedByCode(res)
        this.doSetTranslation(res)
      }
    })
  }

  doUnsubscribeLanguageSub() {
    if (this.languageCodeSub$) this.languageCodeSub$.unsubscribe()
  }

  //#endregion

  //#region === FUNCOES DE CONTROLE DE TELA ===

  doSetFlagClassSelectedByCode(code: string | null) {
    let className: string = ''

    if (code == 'pt-BR') className = 'br'
    if (code == 'en') className = 'us'
    if (code == 'es') className = 'es'
    if (code == 'it') className = 'it'

    if (className && className != '') this.flagClassSelected = className
  }

  //#endregion

}
