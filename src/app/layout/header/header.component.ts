import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  headerForm: FormGroup = new FormGroup({})
  languageControl: FormControl = new FormControl('en')

  @Input() isSticky: boolean = false

  constructor(private translate: TranslateService,) { }

  ngOnInit() {
    this.doCreateHeaderForm()
  }

  //#region === FUNCOES DO FORMULARIO ===

  doCreateHeaderForm() {
    const language: string = this.doGetLanguageLocalStorage()

    if (language) {
      this.languageControl = new FormControl(language)
      this.doSetLanguage(language)
    }

    this.headerForm = new FormGroup({
      language: this.languageControl
    })

    this.doActiveHeaderChange()
  }

  doActiveHeaderChange() {
    this.languageControl?.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      ).subscribe((value) => {
        this.doSetLanguage(value);
    });
  }

  doSetLanguageHeaderForm(language: string) {
    if (language) {
      this.headerForm.controls['language'].setValue(language)
    }
  }

  //#endregion

  //#region === FUNÇÕES DA TRADUÇÃO ===

  doSetLanguage(language: string) {
    if (language) {
      localStorage.setItem("language", language)
      this.doSetTranslation(language)
    }
  }

  doSetTranslation(language: string) {
    if (language) this.translate.use(language)
  }

  doGetLanguageLocalStorage(): string {
    let check: string = 'en'

    const language = localStorage.getItem("language")
    
    if (language) check = language
    if (!language) localStorage.setItem("language", check)

    return check
  }

  //#endregion

  //#region === FUNÇÕES DAS TAB ===

  @HostListener('window:focus', ['$event'])
  onFocusPage(): void {
    const language = this.doGetLanguageLocalStorage()

    if (language && language != this.headerForm.value.language){
      this.doSetLanguageHeaderForm(language)
      this.doSetTranslation(language)
    }
  }

  //#endregion
}
