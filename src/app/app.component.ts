import { Component, HostListener } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private spinner: NgxSpinnerService,
              private router: Router) {}

  ngOnInit() {
    this.doLoadingComponent()
  }

  //#region === CONTROLE DE TELA ===
  
  doLoadingComponent() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.doSpinComponentLoad(true)
      } else if (event instanceof NavigationEnd || event instanceof NavigationError || event instanceof NavigationCancel) {
        this.doSpinComponentLoad(false)
      }
    });
  }

  doSpinComponentLoad(show: boolean) {
    if (show) {
      this.spinner.show("ComponentLoad");
    } else {
      this.spinner.hide("ComponentLoad");
    }
  }
  
  //#endregion

}
