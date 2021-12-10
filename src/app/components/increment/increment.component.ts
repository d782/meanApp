import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [
  ]
})
export class IncrementComponent implements OnInit {

  @Input() progreso:number=0;
  @Input() btnClass:string="btn btn-primary";

  @Output() changePxValue: EventEmitter<number>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  get getPorcentaje() {
    return `${this.progreso}%`
  }
  changeValue(value:number){
    if(this.progreso>=100 && value>=0){
      this.changePxValue.emit(100);
      return this.progreso=100;
    }
    if(this.progreso<=0 && value<0){
      this.changePxValue.emit(0);
      return this.progreso=0;
    }
    this.changePxValue.emit(this.progreso);
      return this.progreso=this.progreso+value;
  }
  onChange(v:number){
    this.progreso=v;
    if(v>=100){
      this.progreso=100;
    }else if(v<=0){
      this.progreso=0;
    }else{
      this.progreso=v;
    }
    this.changePxValue.emit(this.progreso);
  }
}
