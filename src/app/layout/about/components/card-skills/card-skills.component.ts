import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-skills',
  templateUrl: './card-skills.component.html',
  styleUrls: ['./card-skills.component.css']
})
export class CardSkillsComponent {

  @Input() classSocialIcons: string = 'fa-solid fa-question'
  @Input() title: string = 'Not specified'

}
