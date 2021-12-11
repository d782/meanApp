import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsers().then(users=>console.log(users));
  }
  getUsers():Promise<any>{
    const promesa=new Promise((resolve,reject)=>{
      fetch('https://reqres.in/api/users?page=2').
      then(data=>data.json()).then(resp=>resolve(resp.data))
      .catch(err=>console.log(err))
    })
    
    return promesa
  }


}
