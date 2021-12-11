import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  linkTheme= document.querySelector('#theme');
  

  constructor() { }
  getColor(){
    let url=localStorage.getItem('theme') as string;

    if(url.length>0){
      document.querySelector('#theme')?.setAttribute('href',url);
    }else{
      document.querySelector('#theme')?.setAttribute('href',"./assets/css/colors/default-dark.css")
    }
  }
  changeTheme(s:string){
    
    let url=`./assets/css/colors/${s}.css`;

    this.linkTheme?.setAttribute('href',url);
    localStorage.setItem('theme',url);
    this.checkCurrentTheme();
  }
  checkCurrentTheme(){
    let links=document.querySelectorAll('.selector');

    links.forEach(element=>{
      element.classList.remove('working');
      const btnTheme=element.getAttribute('data-theme');
      const btnUrl=`./assets/css/colors/${btnTheme}.css`;
      const currentTheme=this.linkTheme?.getAttribute('href');

      if(btnUrl===currentTheme) {
        element.classList.add('working');
      }
    })
  }
}
