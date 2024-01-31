import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent {

  @Input() title: string = "Não específicado"
  @Input() icon: string | undefined
  @Input() link: string | undefined

  classLink: string = ''
  classLinkIcon: string = 'material-icons-outlined'
  
}
