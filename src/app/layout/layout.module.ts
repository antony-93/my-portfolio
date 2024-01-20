import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeModule } from './home/home.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ComponentsModule } from './components/components.module';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [LayoutComponent, FooterComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HomeModule,
    HeaderModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  providers: []
})
export class LayoutModule { }
