import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notpagefound',
  templateUrl: './notpagefound.component.html',
  styles: [
  ]
})
export class NotpagefoundComponent implements OnInit {
  year:Date=new Date();
  constructor() {
    this.year.getFullYear();
   }

  ngOnInit(): void {
  }

}
