import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {


  // tslint:disable-next-line:no-inferrable-types
  porcentaje1: number = 20;
  // tslint:disable-next-line:no-inferrable-types
  porcentaje2: number = 30;
  constructor() { }

  ngOnInit() {
  }
}
