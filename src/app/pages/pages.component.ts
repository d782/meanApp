import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';



@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  

  constructor(private settings:SettingsService) { }

  ngOnInit(): void {
    //./assets/css/colors/default-dark.css
    this.settings.getColor();
  }
  

}
