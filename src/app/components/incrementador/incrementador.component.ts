import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';





@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtPorcentaje') txtPorcentaje: ElementRef;

  // tslint:disable-next-line:no-inferrable-types
  @Input('nombre') leyenda: string = 'Leyenda';
  // tslint:disable-next-line:no-inferrable-types
  @Input() porcentaje: number = 50;

  @Output() cambioValor: EventEmitter <number> = new EventEmitter();

  constructor() {

   }

  ngOnInit() {
  }

  onChanges(newValue: number) {

    // tslint:disable-next-line:prefer-const
    //let elementoHTML: any = document.getElementsByName('progreso')[0];


    if ( newValue >= 100 ) {
      this.porcentaje = 100;
    } else if ( newValue <= 0 ) {
      this.porcentaje = newValue;
    } else {
      this.porcentaje = newValue;
    }
    //elementoHTML.value = this.porcentaje;
    this.txtPorcentaje.nativeElement.value = this.porcentaje;
    this.cambioValor.emit(this.porcentaje);
  }

  cambiarValor( valor ) {
    if ( this.porcentaje >= 100 && valor > 0 ) {
      this.porcentaje = 100;
      return;
    }
    if ( this.porcentaje <= 0 && valor < 0 ) {
      this.porcentaje = 0;
      return;
    }
    this.porcentaje += valor;

    this.cambioValor.emit(this.porcentaje);

  }

}
