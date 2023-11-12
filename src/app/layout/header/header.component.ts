import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerForm: FormGroup = new FormGroup({})
  languageControl: FormControl = new FormControl('en')

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.doCreateHeaderForm()
  }

  //#region === FUNCOES DO FORMULARIO ===

  doCreateHeaderForm() {
    this.headerForm = new FormGroup({
      language: this.languageControl
    })

    this.doActiveHeaderChange()
  }

  doActiveHeaderChange() {
    this.languageControl?.valueChanges.pipe(
      debounceTime(500)
      ).subscribe((value) => {
        this.doSelectLanguage(value);
    });
  }

  doSelectLanguage(language: string) {
    if (language) this.translate.use(language)
  }

  //#endregion

}
