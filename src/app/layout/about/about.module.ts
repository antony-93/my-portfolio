import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { CardSkillsComponent } from './components/card-skills/card-skills.component';

@NgModule({
  declarations: [AboutComponent, CardSkillsComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})

export class AboutModule { }
