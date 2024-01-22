import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent {

  @Input() title: string = "Não específicado"
  @Input() icon: string = "Não específicado"
  @Input() link: string = ""

  classLink: string = 'nav-link d-flex ms-md-4 d-md-block d-lg-flex text-white'
  classLinkIcon: string = 'material-icons-outlined me-2 me-md-0 me-lg-1 mt-md-0 mt-1 align-center-md'
  
}
