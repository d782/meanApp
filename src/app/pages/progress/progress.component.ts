import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ],
  styleUrls:['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  
  progreso:number=0;

  constructor() { }

  ngOnInit(): void {
  }
  get getPorcentaje(){
    return `${this.progreso}%`
  }
  cambioValorHijo(val:number){
    this.progreso=val;
  }

}
