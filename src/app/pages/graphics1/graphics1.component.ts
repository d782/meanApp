import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphics1',
  templateUrl: './graphics1.component.html',
  styles: [
  ]
})
export class Graphics1Component implements OnInit {
  public title:string="Projects";
  public doughnutChartLabels: string[] = ["crops","poultry","fertilizer"]
  public data:number[]=[200,150,320];
  
  constructor() { }

  ngOnInit(): void {
  }

}
