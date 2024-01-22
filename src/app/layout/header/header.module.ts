import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../components/components.module';
import { MenuNavigationComponent } from './components-header/menu-navigation/menu-navigation.component';
import { RouterModule } from '@angular/router';
import { NavItemComponent } from './components-header/nav-item/nav-item.component';

@NgModule({
  declarations: [HeaderComponent, MenuNavigationComponent, NavItemComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ComponentsModule,
    RouterModule,
  ],
  exports: [HeaderComponent, MenuNavigationComponent, NavItemComponent]
})
export class HeaderModule { }
