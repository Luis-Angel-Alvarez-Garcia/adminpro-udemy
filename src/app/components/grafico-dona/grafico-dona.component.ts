import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() label: string[] = ['Con Frijoles', 'Con Natilla', 'Con tocino'];
  @Input() data: number[] = [24, 30, 46];
  @Input() chartType: string = 'doughnut';


  constructor() { }

  ngOnInit() {
    console.log(this.data);
    console.log(this.label);
    console.log(this.chartType);
  }

}
