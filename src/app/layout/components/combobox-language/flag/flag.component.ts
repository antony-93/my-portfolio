import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css']
})
export class FlagComponent implements OnInit{

  flagClass: string = "md-14 fp fp-md fp-rounded"

  @Input() flag: string = "br"
  @Input() title: string = "Brasil"
  @Output() onClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() {
    this.doSetFlagInFlagClass()
  }

  //#region === FUNCOES DO ESTILO DA BANDEIRA ===

  doSetFlagInFlagClass() {
    if (this.flag) {
      this.flagClass += ` ${this.flag}`
    }
  }

  //#endregion

  //#region === FUNCOES EVENTOS EMIT ===

  doEmitClick() {
    this.onClick.emit(true)
  }

  //#endregion

}
