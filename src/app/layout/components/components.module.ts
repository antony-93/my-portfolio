import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboboxLanguageComponent } from './combobox-language/combobox-language.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [ComboboxLanguageComponent],
  imports: [
    CommonModule
  ],
  exports: [ComboboxLanguageComponent]
})
export class ComponentsModule { }
