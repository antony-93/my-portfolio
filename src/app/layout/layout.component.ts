import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  fds() {
    const scrolYH = window.scrollY
    console.log(scrolYH)
  }
}
