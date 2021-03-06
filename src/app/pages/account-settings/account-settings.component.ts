import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {
  
  
  constructor(private settings:SettingsService) {
    
   }

  ngOnInit(): void {
    this.settings.checkCurrentTheme();
    
  }

  changeTheme(s:string){
    this.settings.changeTheme(s);
    this.settings.checkCurrentTheme();
  }
  
}
