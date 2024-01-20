import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboboxLanguageComponent } from './combobox-language/combobox-language.component';
import { FlagComponent } from './combobox-language/flag/flag.component';



@NgModule({
  declarations: [ComboboxLanguageComponent, FlagComponent],
  imports: [
    CommonModule
  ],
  exports: [ComboboxLanguageComponent]
})
export class ComponentsModule { }
