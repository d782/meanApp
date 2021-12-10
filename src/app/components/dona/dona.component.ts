import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
  @Input() title:string="";
  @Input('labels') labels:string[]=[];
  @Input('data') data:number[]=[];

  doughnutChartLabels: string[] =this.labels;
  doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: this.data},
    ]
  };
  doughnutChartType: ChartType = 'doughnut';
  constructor() {
    
   }

  ngOnInit(): void {
    console.log(this.labels);
    console.log(this.data)
  }
}
